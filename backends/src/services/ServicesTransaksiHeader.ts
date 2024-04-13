import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { TransaksiHeader } from "../entity/TransaksiHeader";

export default new (class ServicesTransaksiHeader {
  private readonly transaksiHeaderRepository =
    AppDataSource.getRepository(TransaksiHeader);

  async getTransaksiHeader(req: Request, res: Response): Promise<Response> {
    try {
      const transaksiHeaderExisting = await this.transaksiHeaderRepository.find(
        {
          relations: ["transaksiDetails", "transaksiDetails.masterBarang"],
        }
      );

      if (!transaksiHeaderExisting) {
        return res.status(400).json({
          success: false,
          code: 400,
          message: "Data transaksi header tidak ditemukan",
        });
      }

      return res.status(200).json({
        success: true,
        code: 200,
        message: "Success",
        data: transaksiHeaderExisting,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        code: 500,
        message: "Internal server error",
      });
    }
  }

  async addTransaksiHeader(req: Request, res: Response): Promise<Response> {
    try {
      const { total_harga, transaksiDetails } = req.body;

      const transaksiHeaderExisting =
        await this.transaksiHeaderRepository.create({
          total_harga,
          transaksiDetails,
        });

      const transaksiHeaderCreate = await this.transaksiHeaderRepository.save(
        transaksiHeaderExisting
      );

      return res.status(200).json({
        success: true,
        code: 200,
        message: "Success",
        data: transaksiHeaderCreate,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        code: 500,
        message: "Internal server error",
      });
    }
  }
})();
