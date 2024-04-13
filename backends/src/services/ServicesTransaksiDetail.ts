import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { TransaksiDetail } from "../entity/TransaksiDetail";
import { MasterBarang } from "../entity/Master_Barang";

export default new (class ServicesTransaksiDetail {
  private readonly transaksidetailRepository =
    AppDataSource.getRepository(TransaksiDetail);

  private readonly masterBarangRepository =
    AppDataSource.getRepository(MasterBarang);

  async getTransaksiDetail(req: Request, res: Response): Promise<Response> {
    try {
      const existingTransaksiDetail = await this.transaksidetailRepository.find(
        {
          relations: ["masterBarang"],
        }
      );

      if (!existingTransaksiDetail) {
        return res.status(400).json({
          success: false,
          code: 400,
          message: "Data transaksi detail tidak di temukan",
        });
      }

      return res.status(200).json({
        success: true,
        code: 200,
        message: "Success",
        data: existingTransaksiDetail,
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

  async addTransaksiDetail(req: Request, res: Response): Promise<Response> {
    try {
      const { id_barang, qty } = req.body;

      const barangExisting = await this.masterBarangRepository.findOne({
        where: {
          id_barang
        }
      })

      if(!barangExisting) {
        return res.status(400).json({
          success: false,
          code: 400,
          message: "Barang tidak di temukan"
        })
      }

      const transaksiDetailExisting = await this.transaksidetailRepository.findOne({
        where: {masterBarang: {id_barang: barangExisting.id_barang}}
      })

      if(transaksiDetailExisting) {
        const transaksiDetailUpdate = await this.transaksidetailRepository.save({
          ...transaksiDetailExisting,
          qty: transaksiDetailExisting.qty + qty,
          total_harga: (transaksiDetailExisting.qty + qty) * barangExisting.harga
        })
        return res.status(200).json({
          success: true,
          code: 200,
          message: "Transaksi detail update",
          data: transaksiDetailUpdate
        })
      } else {
        const transaksiDetailAdd = await this.transaksidetailRepository.create({
          masterBarang: {id_barang: barangExisting.id_barang},
          qty,
          total_harga: qty * barangExisting.harga
        })

        const transaksiDetailAddSaved = await this.transaksidetailRepository.save(transaksiDetailAdd)
        return res.status(200).json({
          success: true,
          code: 200,
          message: "Transaksi detail add",
          data: transaksiDetailAddSaved
        })
      }
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        success: false,
        code: 500,
        message: "Internal server error"
      })
    }
  }

  async deleteTransaksiDetail(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const transaksiDetailExisting = await this.transaksidetailRepository.findOne({
        where: {id_transaksi_detail: id}
      })

      if(!transaksiDetailExisting) {
        return res.status(400).json({
          success: false,
          code: 400,
          message: "Transaksi detail tidak di temukan"
        })
      }

      const transaksiDetailDelete = await this.transaksidetailRepository.remove(transaksiDetailExisting)

      return res.status(200).json({
        success: true,
        code: 200,
        message: "Transaksi detail delete",
        data: transaksiDetailDelete
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        success: false,
        code: 500,
        message: "Internal server error"
      })
    }
  }
})();
