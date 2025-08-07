import { Delete } from '@nestjs/common';
import { OzzBaseEntity } from 'src/entities/ozz.base.entitiy';
import { Column, Entity } from 'typeorm';
import { v4 as uuidV4 } from 'uuid'; // Ensure you have uuid installed
@Entity()
export class Product extends OzzBaseEntity {
  @Column()
  name: string;
}

// The Product entity extends OzzBaseEntity to inherit common properties and methods.
