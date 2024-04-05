import axios from "axios";
import React, { useEffect, useState } from "react";

export default function TransaksiBarang() {
  const [dataBarang, setDataBarang] = useState([]);
  const [newDataBarang, setNewDataBarng] = useState({
    id_barang: "",
    nm_barang: "",
    qty: 0,
    harga: 0,
  });

  const [editBarang, setEditBarang] = useState(null);

  // function get data
  const handlegetDataBarang = async () => {
    try {
      const response = await axios.get("http://localhost:5000/master_barang");
      setDataBarang(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // function create data
  const handleCreateDataBarang = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/master_barang",
        newDataBarang
      );
      setDataBarang([...dataBarang, response.data]);

      setNewDataBarng({
        id_barang: "",
        nm_barang: "",
        qty: 0,
        harga: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // function edit menangkap data barang
  const handleEditDataBarng = async (dataBarang) => {
    setNewDataBarng({
      id_barang: dataBarang.id_barang,
      nm_barang: dataBarang.nm_barang,
      qty: dataBarang.qty,
      harga: dataBarang.harga,
    });
    setEditBarang(dataBarang.id_barang);
  };

  // function edit click data
  const handleClickEditDataBarang = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/master_barang/${editBarang}`,
        newDataBarang
      );

      setDataBarang((prevData) =>
        prevData.map((dataBarng) =>
          dataBarng.id_barang === editBarang ? response.data : dataBarng
        )
      );

      setNewDataBarng({
        id_barang: "",
        nm_barang: "",
        qty: 0,
        harga: 0,
      });
      setEditBarang(null);
    } catch (error) {
      console.log(error);
    }
  };

  // function delete data barang
  const handleDeleteDataBarang = async (id_barang) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/master_barang/${id_barang}`
      );
      setDataBarang((deleteBarang) =>
        deleteBarang.filter((dataBarang) => dataBarang.id_barang !== id_barang)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlegetDataBarang();
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:max-w-3xl p-6 bg-white rounded-lg mb-4">
        <h1 className="text-2xl font-bold mb-4">Transaksi</h1>
        <div className="mb-4 flex">
          <div className="mr-4 flex">
            <label className="block text-sm font-bold mb-2 mr-2">
              Id Transaksi:
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              value={newDataBarang.id_barang}
              onChange={(e) =>
                setNewDataBarng({ ...newDataBarang, id_barang: e.target.value })
              }
            />
          </div>
          <div className="flex">
            <label className="block text-sm font-bold mb-2 mr-2">Total:</label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              value={newDataBarang.harga}
              onChange={(e) =>
                setNewDataBarng({ ...newDataBarang, harga: e.target.value })
              }
            />
          </div>
        </div>
        <div className="mb-4 flex">
          <div className="mr-4 flex">
            <label className="block text-sm font-bold mb-2 mr-2">
              Tanggal Transaksi:
            </label>
            <input
              className="w-full p-2 border rounded-md"
              type="text"
              value={newDataBarang.nm_barang}
              onChange={(e) =>
                setNewDataBarng({ ...newDataBarang, nm_barang: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      <div>
        <button
          className="border-2 p-1 bg-red-500 text-white font-bold"
          onClick={handleCreateDataBarang}
        >
          Add
        </button>
        <button
          className="border-2 p-1 bg-green-600 text-white font-bold"
          onClick={handleClickEditDataBarang}
        >
          Save
        </button>
      </div>
      <div className="w-full md:max-w-3xl bg-white rounded-lg shadow-md">
        <table className="w-full table-fixed border">
          <thead>
            <tr className="bg-blue-800 text-black">
              <th className="w-1/5 px-4 border">ID Barang</th>
              <th className="w-1/5 px-4 border">Nama Barang</th>
              <th className="w-1/5 px-4 border">Harga</th>
              <th className="w-1/5 px-4 border">Quantity</th>
              <th className="w-1/5 px-4 border">Option</th>
            </tr>
          </thead>
          <tbody>
            {dataBarang.length === 0 ? (
              <tr>
                <td>Data tidak ada</td>
              </tr>
            ) : (
              dataBarang.map((data) => (
                <tr className="text-center" key={data.id_barang}>
                  <td className="border px-4">{data.id_barang}</td>
                  <td className="border px-4">{data.nm_barang}</td>
                  <td className="border px-4">{data.harga}</td>
                  <td className="border px-4">{data.qty}</td>
                  <td className="border px-4 flex">
                    <button
                      className="text-black font-bold py-1 px-3 rounded mr-2"
                      onClick={() => handleEditDataBarng(data)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-black font-bold py-1 px-3 rounded"
                      onClick={() => handleDeleteDataBarang(data.id_barang)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
