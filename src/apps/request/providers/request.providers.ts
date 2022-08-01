import { Connection } from "typeorm";
import { Request } from "../entities/request.entity";
import { File } from "../entities/file.entity";
import {Workspace} from "../entities/workspace.entity";

export const requestProviders = [
  {
    provide: "request_REPOSITORY",
    useFactory: (connection: Connection) => connection.getRepository(Request),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "file_REPOSITORY",
    useFactory: (connection: Connection) => connection.getRepository(File),
    inject: ["DATABASE_CONNECTION"],
  },
  {
    provide: "workspace_REPOSITORY",
    useFactory: (connection: Connection) => connection.getRepository(Workspace),
    inject: ["DATABASE_CONNECTION"],
  },
];
