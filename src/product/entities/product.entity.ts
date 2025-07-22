import {
  BeforeInsert,
  Column,
  Entity,
  PrimaryColumn,
  CreateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid'; // Ensure you have uuid installed
@Entity()
export class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @BeforeInsert() {
    this.id = uuidV4();
  }

  @CreateDateColumn()
  createdAt!: Date;
}
