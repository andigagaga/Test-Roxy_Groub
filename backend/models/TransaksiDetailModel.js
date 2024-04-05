import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import MasterBarang from "./MasterBarangModels.js";

const TransaksiDetail = db.define("transaksi_detail", {
    id_trans: {
        type: DataTypes.STRING(15),
        primaryKey: true
    },
    id_barang: {
        type: DataTypes.STRING(15)
    },
    qty: {
        type: DataTypes.INTEGER(10)
    }
}, {
    freezeTableName: true
});

TransaksiDetail.belongsTo(MasterBarang, { foreignKey: "id_barang" });

export default TransaksiDetail;

(async () => {
    await db.sync();
})()
