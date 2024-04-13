import { Request, Response } from "express";
import ServicesBarang from "../services/ServicesBarang";

export default new class ControllerBarang {
    createBarang(req: Request, res:Response):Promise<Response> {
        return ServicesBarang.createBarang(req, res)
    }
    getBarang(req:Request, res: Response): Promise<Response> {
        return ServicesBarang.getBarang(req, res)
    }

    updateBarang(req:Request, res: Response): Promise<Response> {
        return ServicesBarang.updateBarang(req, res)
    }
    
    getBarangById(req:Request, res:Response): Promise<Response> {
        return ServicesBarang.getBarangById(req, res)
    }

    deleteBarang(req: Request, res: Response): Promise<Response> {
        return ServicesBarang.deleteBarang(req,res)
    }
}