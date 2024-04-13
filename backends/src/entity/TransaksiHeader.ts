import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TransaksiDetail } from "./TransaksiDetail";

@Entity("transaksi_header")
export class TransaksiHeader {
  @PrimaryGeneratedColumn("uuid")
  id_transaksi_header: string;

  @Column("int")
  total_harga: number;

  @CreateDateColumn({ type: "timestamp" })
  tgl_trans: Date;

  @OneToMany(
    () => TransaksiDetail,
    (transaksiDetail) => transaksiDetail.transaksiHeader
  )
  transaksiDetails: TransaksiDetail[];
}
