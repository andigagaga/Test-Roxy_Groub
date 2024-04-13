import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1713006284289 implements MigrationInterface {
    name = 'MyMigration1713006284289'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`transaksi_detail\` (\`id_transaksi_detail\` varchar(36) NOT NULL, \`qty\` int NOT NULL, \`total_harga\` int NOT NULL, PRIMARY KEY (\`id_transaksi_detail\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`transaksi_detail\``);
    }

}
