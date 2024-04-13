import { Router } from "express";
import ControllerTransaksiDetail from "../controllers/ControllerTransaksiDetail";

const RouterTransaksiDetail = Router();

RouterTransaksiDetail.get("/transaksiDetail", ControllerTransaksiDetail.getTransaksiDetail);
RouterTransaksiDetail.post("/transaksiDetail/add", ControllerTransaksiDetail.addTransaksiDetail);
RouterTransaksiDetail.delete("/transaksiDetail/delete/:id", ControllerTransaksiDetail.deleteTransaksiDetail);


export default RouterTransaksiDetail