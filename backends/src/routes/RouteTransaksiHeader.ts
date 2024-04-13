import { Router } from "express";
import ControllerTransaksiHeader from "../controllers/ControllerTransaksiHeader";

const RouterTransaksiHeader = Router();

RouterTransaksiHeader.get(
  "/transaksiHeader",
  ControllerTransaksiHeader.getTransaksiHeader
);
RouterTransaksiHeader.post(
  "/transaksiHeader/add",
  ControllerTransaksiHeader.addTransaksiHeader
);

export default RouterTransaksiHeader;
