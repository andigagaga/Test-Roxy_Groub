import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { MasterBarang } from "../entity/Master_Barang";

export default new (class ServicesBarang {
  private readonly barangRepository = AppDataSource.getRepository(MasterBarang);

  async createBarang(req: Request, res: Response): Promise<Response> {
    try {
      const { id_barang, nama_barang, qty, harga } = req.body;
      const newBarang = await this.barangRepository.create({
        id_barang,
        nama_barang,
        qty,
        harga,
      });
      await this.barangRepository.save(newBarang);

      return res.status(201).json({
        success: true,
        code: 201,
        message: "Barang created successfully",
        data: newBarang,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        code: 500,
        message: "Internal server error",
        error: error,
      });
    }
  }

  async getBarang(req: Request, res: Response): Promise<Response> {
    try {
      const allBarang = await this.barangRepository.find({
        order: {
          id_barang: "ASC",
        },
      });

      return res.status(200).json({
        success: true,
        code: 200,
        message: "Success",
        data: allBarang,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        code: 500,
        message: "Internal server error",
        error: error,
      });
    }
  }

  async getBarangById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      console.log(id);

      const barangId = await this.barangRepository.findOne({
        where: {
          id_barang: id,
        },
      });

      if (!barangId) {
        return res.status(400).json({
          success: false,
          code: 400,
          message: "Barang tidak di temukan",
        });
      }

      return res.status(200).json({
        success: true,
        code: 200,
        message: "Success",
        data: barangId,
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

  async updateBarang(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const barangId = await this.barangRepository.findOne({
        where: {
          id_barang: id,
        },
      });

      if (!barangId) {
        return res.status(400).json({
          success: false,
        });
      }

      const { id_barang, nama_barang, qty, harga } = req.body;

      if (id_barang) barangId.id_barang = id;
      if (nama_barang) barangId.nama_barang = nama_barang;
      if (qty) barangId.qty = qty;
      if (harga) barangId.harga = harga;

      if (id_barang || nama_barang || qty || harga) {
        const barangUpdate = await this.barangRepository.save(barangId);

        return res.status(200).json({
          success: true,
          code: 200,
          message: "Update success",
          data: barangUpdate,
        })
      } else {
        return res.status(400).json ({
          success: false,
          code: 400,
          message: "No changes provided for update"
        })
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        code: 500,
        message: "Internal server error",
      });
    }
  }

  async deleteBarang(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const barangId = await this.barangRepository.findOne({
        where: {
          id_barang: id,
        },
      });
      if (!barangId) {
        return res.status(400).json({
          success: false,
          code: 400,
          message: "Barang tidak di temukan",
        });
      }

      const deleteBarang = await this.barangRepository.remove(barangId);

      return res.status(200).json({
        success: true,
        code: 200,
        message: "Barang delete",
        data: deleteBarang,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        code: 500,
        message: "internal server error",
      });
    }
  }
})();
