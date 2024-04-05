import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const MasterBarang = db.define("master_barang", {
    id_barang: {
        type: DataTypes.STRING(15),
        primaryKey: true
    },
    nm_barang: {
        type: DataTypes.STRING(30)
    },
    qty: {
        type: DataTypes.INTEGER(10)
    },
    harga: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
});

export default MasterBarang;

(async () => {
    await db.sync();
})();
