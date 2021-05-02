import { Account } from "../model/Account";
import {BRANCH_DATA} from "../repository/BraanchDao";

export var ACCOUNT_DATA: Account[] = [
    new Account(1, 1001, "Dhiraj", 10000, BRANCH_DATA[0]),
    new Account(2, 2001, "Suraj", 20000, BRANCH_DATA[1]),
    new Account(3, 1002, "Ram", 10020, BRANCH_DATA[0])
];