import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    let balanceValue: number = this.getBalance();

    if (this.validateStatus()) {
      this.setBalance(balanceValue + value);
    } else {
      throw new Error("Sua conta esta desativada");
    }

    console.log("Voce pegou um empréstimo");
  };
}
