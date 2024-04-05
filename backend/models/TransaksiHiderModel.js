import { DataTypes, INTEGER } from "sequelize";
import db from "../config/Database.js";

const TransaksiHider = db.define("transaksi_hider", {
    id_trans:{
        type: DataTypes.STRING(15),
        primaryKey: true
    },
    tgl_trans: {
        type: DataTypes.DATE
    },
    total: {
        type: DataTypes.INTEGER(10)
    },
}, {
    freezeTableName: true
})

export default TransaksiHider;

(async () => {
    await db.sync();
})()