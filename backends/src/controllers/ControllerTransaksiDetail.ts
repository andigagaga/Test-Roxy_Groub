import { Request, Response } from "express";
import ServicesTransaksiDetail from "../services/ServicesTransaksiDetail";

export default new (class ControllerTransaksiDetail {
    getTransaksiDetail(req:Request, res:Response): Promise<Response> {
        return ServicesTransaksiDetail.getTransaksiDetail(req, res)
    }

    addTransaksiDetail(req:Request, res:Response): Promise<Response> {
        return ServicesTransaksiDetail.addTransaksiDetail(req, res)
    }

    deleteTransaksiDetail(req: Request, res: Response): Promise<Response> {
        return ServicesTransaksiDetail.deleteTransaksiDetail(req, res)
    }
})