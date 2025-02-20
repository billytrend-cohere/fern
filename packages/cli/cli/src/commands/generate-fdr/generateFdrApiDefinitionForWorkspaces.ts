import { Audiences } from "@fern-api/configuration";
import { AbsoluteFilePath, stringifyLargeObject } from "@fern-api/fs-utils";
import { Project } from "@fern-api/project-loader";
import { convertIrToFdrApi } from "@fern-api/register";
import { convertOpenApiWorkspaceToFernWorkspace } from "@fern-api/workspace-loader";
import { writeFile } from "fs/promises";
import path from "path";
import { CliContext } from "../../cli-context/CliContext";
import { generateIrForFernWorkspace } from "../generate-ir/generateIrForFernWorkspace";

export async function generateFdrApiDefinitionForWorkspaces({
    project,
    outputFilepath,
    cliContext,
    audiences
}: {
    project: Project;
    outputFilepath: AbsoluteFilePath;
    cliContext: CliContext;
    audiences: Audiences;
}): Promise<void> {
    await Promise.all(
        project.apiWorkspaces.map(async (workspace) => {
            await cliContext.runTaskForWorkspace(workspace, async (context) => {
                const fernWorkspace =
                    workspace.type === "oss"
                        ? await convertOpenApiWorkspaceToFernWorkspace(workspace, context)
                        : workspace;

                const ir = await generateIrForFernWorkspace({
                    workspace: fernWorkspace,
                    context,
                    generationLanguage: undefined,
                    audiences,
                    smartCasing: false,
                    disableExamples: false
                });

                const apiDefinition = convertIrToFdrApi({
                    ir,
                    snippetsConfig: {}
                });

                const resolvedOutputFilePath = path.resolve(outputFilepath);
                await writeFile(resolvedOutputFilePath, await stringifyLargeObject(apiDefinition, { pretty: true }));
                context.logger.info(`Wrote FDR API definition to ${resolvedOutputFilePath}`);
            });
        })
    );
}
