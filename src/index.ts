import { Branch } from "./model/Branch";
import { BranchService } from "./service/BranchService";
import express = require('express');

const app = express();

/*
var ser = new BranchService();

// console.log(ser.getAllBranches());

console.log(ser.getBranchByName("KBP"));
console.log(ser.addBranchDetails(new Branch(4,104,"Att","Bhuinj")));
// console.log(ser.getAllBranches());
*/

var branchService = new BranchService();

app.get("/branch", (req, res) => {
    res.send(branchService.getAllBranches());
})

app.get("/branch/:name", (req, res) => {
    var name = req.params.name;
    res.send(branchService.getBranchByName(name));
})

app.post('/branch', (req, res)=>{
    console.log();
})

app.listen(9090);