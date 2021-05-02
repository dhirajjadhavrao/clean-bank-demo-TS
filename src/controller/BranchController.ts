import express = require('express');
import { BranchService } from '../service/BranchService';


const app = express();

const branchService = new BranchService();

app.get("/branch", (req, res) => {
    res.send(branchService.getAllBranches());
})

app.get("/branch/:name", (req, res) => {
    var name = req.params.name;
    res.send(branchService.getBranchByName(name));
})

app.post('/branch', (req, res)=>{
    console.log("I am POst ");
})

// app.listen(9090);