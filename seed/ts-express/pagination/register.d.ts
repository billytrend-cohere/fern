/**
 * This file was auto-generated by Fern from our API Definition.
 */
import express from "express";
import { UsersService } from "./api/resources/users/service/UsersService";
export declare function register(expressApp: express.Express | express.Router, services: {
    users: UsersService;
}): void;