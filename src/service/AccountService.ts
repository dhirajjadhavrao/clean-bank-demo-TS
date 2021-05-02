import {Account} from "../model/Account";
import { ACCOUNT_DATA } from "../repository/AccountDao"; 

export class AccountService {
    getAllAccounts() : Account[]{
        return ACCOUNT_DATA;
    }

    getAccountDetails(accNumber:number){
        return ACCOUNT_DATA.filter((account) => {account.number === accNumber});
    }

    addBranchDetails(account: Account){
        return ACCOUNT_DATA.push(account);
    }
}