import { Branch } from "../model/Branch";
import { BRANCH_DATA } from "../repository/BraanchDao";

export class BranchService {

    getAllBranches():Branch[]{
        return BRANCH_DATA;
    }

    getBranchByName(name:string){
        return BRANCH_DATA.filter((branch)=>branch.name === name);
    }

    addBranchDetails(branch:Branch){
        return BRANCH_DATA.push(branch);
    }
    
}