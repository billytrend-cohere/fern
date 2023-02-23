import { FernRegistry } from "@fern-fern/registry";
import { PropertyTitle } from "../types/object/PropertyTitle";
import styles from "./EndpointParameter.module.scss";

export declare namespace EndpointParameter {
    export interface Props {
        name: string;
        docs?: string;
        type: FernRegistry.Type;
    }
}

export const EndpointParameter: React.FC<EndpointParameter.Props> = ({ name, docs, type }) => {
    return (
        <div className={styles.container}>
            <PropertyTitle name={name} type={type} />
            {docs != null && <div className={styles.docs}>{docs}</div>}
        </div>
    );
};