import "reflect-metadata"
import { DataSource } from "typeorm"
import { MasterBarang } from "./entity/Master_Barang"
import { TransaksiDetail } from "./entity/TransaksiDetail"
import { TransaksiHeader } from "./entity/TransaksiHeader"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "crud_trans",
    synchronize: true,
    logging: false,
    entities: [MasterBarang, TransaksiDetail, TransaksiHeader],
    migrations: [],
    subscribers: [],
})
