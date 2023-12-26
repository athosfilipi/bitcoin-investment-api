// dataSource.ts
import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dataSourceConfig from "../ormconfig.js";

export const AppDataSource = new DataSource(dataSourceConfig);
