import { DioAccount } from "./DioAccount";

export class NullAccount extends DioAccount {


  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number): void => {
    let balanceValue: number = this.getBalance();

    if (this.validateStatus()) {
      this.setBalance(balanceValue + value +10);
    } else {
      throw new Error("Sua conta esta desativada");
    }

    console.log("Voce fez um deposito acrescedido de 10 !");
  };
}
