import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm"
import { TransaksiDetail } from "./TransaksiDetail"

@Entity("master_barang")
export class MasterBarang {

    @PrimaryColumn("varchar", {length: 15})
    id_barang: string

    @Column("varchar", {length: 30})
    nama_barang: string

    @Column("int")
    qty: number

    @Column("int")
    harga: number

    @OneToMany (() => TransaksiDetail, (transaksiDetail) => transaksiDetail.masterBarang)
    transaksiDetails: TransaksiDetail[]

}
