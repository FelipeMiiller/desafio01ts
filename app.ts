import { CompanyAccount } from "./class/CompanyAccount";
import { NullAccount } from "./class/NullAccount";
import { PeopleAccount } from "./class/PeopleAccount";







const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
peopleAccount.deposit(11);
peopleAccount.setDocID(300)
console.log(peopleAccount);

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(12);
companyAccount.getLoan(30)
console.log(companyAccount);

const nullAccount: NullAccount = new NullAccount("null", 20);
nullAccount.deposit(13);
console.log(nullAccount);