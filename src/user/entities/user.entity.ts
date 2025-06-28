import { Column, Entity } from 'typeorm';

@Entity()
export class User {
  @Column()
  id: number;
  @Column()
  name: string;
  @Column({ unique: true })
  email: string;
}
