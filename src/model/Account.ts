import { Branch } from "./Branch";

export class Account {
    id!: number;
    number!: number;
    holderName!: string;
    balance!: number;
    branch!: Branch;
}