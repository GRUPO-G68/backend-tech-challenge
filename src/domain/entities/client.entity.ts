import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export interface IClient {
  id: string;
  name: string;
  document: string;
  email: string;
}

@Entity()
export class Client implements IClient {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text', unique: true, nullable: false })
  name: string;
  @Column({ type: 'text', unique: true, nullable: false })
  email: string;
  @Column({ type: 'text', unique: true, nullable: false })
  document: string;

  constructor(name: string, email: string, document: string) {
    this.name = name;
    this.document = document;
    this.email = email;
  }
}
