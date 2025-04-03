import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "João", 10);
console.log(peopleAccount);
peopleAccount.deposit();
// const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
// companyAccount.deposit();
