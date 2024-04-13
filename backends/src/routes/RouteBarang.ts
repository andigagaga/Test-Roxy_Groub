import { Router } from "express";
import ControllerBarang from "../controllers/ControllerBarang";

const RouteBarang = Router();

RouteBarang.get("/barang", ControllerBarang.getBarang);
RouteBarang.get("/barang/:id", ControllerBarang.getBarangById);
RouteBarang.post("/barang", ControllerBarang.createBarang);
RouteBarang.put("/barang/update/:id", ControllerBarang.updateBarang);
RouteBarang.delete("/barang/delete/:id", ControllerBarang.deleteBarang);

export default RouteBarang