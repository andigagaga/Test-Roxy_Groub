import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MasterBarang } from "./Master_Barang";
import { TransaksiHeader } from "./TransaksiHeader";

@Entity("transaksi_detail")
export class TransaksiDetail {
  @PrimaryGeneratedColumn("uuid")
  id_transaksi_detail: string;

  @ManyToOne(
    () => MasterBarang,
    (masterBarang) => masterBarang.transaksiDetails,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  @JoinColumn({ name: "id_barang" })
  masterBarang: MasterBarang;

  @Column("int")
  qty: number;

  @Column("int")
  total_harga: number;

  @ManyToOne(
    () => TransaksiHeader,
    (transaksiHeader) => transaksiHeader.transaksiDetails
  )
  transaksiHeader: TransaksiHeader;
}
