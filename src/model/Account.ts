import { Branch } from "./Branch";

export class Account {
    id: number;
    number: number;
    holderName: string;
    balance: number;
    branch: Branch;

    constructor(id: number, number: number, holderName: string, balance: number, branch: Branch){
        this.id = id;
        this.number = number;
        this.holderName = holderName;
        this.balance = balance;
        this.branch = branch;
    }
}