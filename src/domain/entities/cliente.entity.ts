import { Column, Entity } from "typeorm";

export interface IClient {
  id: string;
  name: string;
  document: string;
  email: string;
}

@Entity()
export class Client implements IClient {
  @Column({ type: "text", unique: true, nullable: false })
  id: string;
  @Column({ type: "text", unique: true, nullable: false })
  name: string;
  @Column({ type: "text", unique: true, nullable: false })
  email: string;
  @Column({ type: "text", unique: true, nullable: false })
  document: string;

  constructor(id: string, name: string, email: string, document: string) {
    this.id = id;
    this.name = name;
    this.document = document;
    this.email = email;
  }
}
