import MasterBarang from "../models/MasterBarangModels.js";

export const getMasterBarang = async (req, res) => {
  try {
    const response = await MasterBarang.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createMasterBarang = async (req, res) => {
  const { id_barang, nm_barang, qty, harga } = req.body;
  try {
    const newMasterBarang = await MasterBarang.create({
      id_barang,
      nm_barang,
      qty,
      harga,
    });
    res.status(201).json(newMasterBarang);
  } catch (error) {
    console.log(error);
  }
};

export const updateMasterBarang = async (req, res) => {
  const { id_barang } = req.params;
  const { nm_barang, qty, harga } = req.body;
  try {
    const existingMasterBarang = await MasterBarang.findOne({
      where: { id_barang },
    });
    if (!existingMasterBarang) {
      return res
        .status(404)
        .json({ error: "Data master barang tidak di temukan" });
    }
    existingMasterBarang.nm_barang = nm_barang;
    existingMasterBarang.qty = qty;
    existingMasterBarang.harga = harga;
    await existingMasterBarang.save();
    res.status(200).json(existingMasterBarang);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Gagal mengupdate data master barang" });
  }
};


export const deleteMasterBarang = async (req, res) => {
    const {id_barang} = req.params;
    try {
        const deleteMasterBarang = await MasterBarang.destroy({where: {id_barang}})
        if(!deleteMasterBarang) {
            return res.status(400).json({error: "Data master barang tidak di temukan"})
        }
        return res.status(200).json({message: "Data master barang berhasil di hapus"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Gagal menghapus data master barang"})
    }
}

export const handleSearchDataBarang = async (req, res) => {
  const {nm_barang} = req.query;
  try {
    const masterBarng = await MasterBarang.findAll({
      where: {
        nm_barang: nm_barang
      }
    });

    if(masterBarng.length === 0) {
      return res.status(404).json({error : "Data barang tidak di temukan"});
    }

    res.status(200).json(masterBarng)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: "Gagal melakukan pencarian data barang"})
  }
}