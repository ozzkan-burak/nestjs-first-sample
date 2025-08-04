import {
  BeforeInsert,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid'; // Ensure you have uuid installed

export abstract class OzzBaseEntity {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;

  @BeforeInsert()
  async beforeInsert() {
    this.id = uuidV4();
  }
}
