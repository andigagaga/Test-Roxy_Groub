import express from "express";
import {
  getMasterBarang,
  createMasterBarang,
  deleteMasterBarang,
  updateMasterBarang,
  handleSearchDataBarang
} from "../controller/MasterBarangController.js";

const router = express.Router();

router.get("/master_barang", getMasterBarang);
router.post("/master_barang", createMasterBarang);
router.patch("/master_barang/:id_barang", updateMasterBarang);
router.delete("/master_barang/:id_barang", deleteMasterBarang)
// search
router.get("/master_barang/search", handleSearchDataBarang);

export default router;
