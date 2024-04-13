import { Request, Response } from "express";
import ServicesTransaksiHeader from "../services/ServicesTransaksiHeader";

export default new (class ControllerTransaksiHeader {
  getTransaksiHeader(req: Request, res: Response): Promise<Response> {
    return ServicesTransaksiHeader.getTransaksiHeader(req, res);
  }

  addTransaksiHeader(req: Request, res: Response): Promise<Response> {
    return ServicesTransaksiHeader.addTransaksiHeader(req, res);
  }
})();
