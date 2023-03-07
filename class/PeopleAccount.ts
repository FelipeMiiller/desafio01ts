import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount {
  private doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }

  getDocID = (): number => {
    return this.doc_id;
  };
  setDocID = (value: number): void => {
    this.doc_id = this.doc_id + value;
  };
}
