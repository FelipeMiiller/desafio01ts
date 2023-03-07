export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance = this.balance + value ;
    } else {
      throw new Error("Sua conta esta desativada");
    }
    console.log("Voce depositou");
  };

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance > value) {
      this.balance = this.balance - value;
    } else {
      throw new Error("Sua conta esta desativada ou seu saldo é insuficiente");
    }
    console.log("Voce sacou");
  };

  getBalance = (): number => {
    return this.balance;
  };
  setBalance = (value: number): void => {
    this.balance = this.balance + value;
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
