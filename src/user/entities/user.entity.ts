import { Column, Entity } from 'typeorm';
import { OzzBaseEntity } from 'src/entities/ozz.base.entitiy';

@Entity()
export class User extends OzzBaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  birthDay: Date;
}
