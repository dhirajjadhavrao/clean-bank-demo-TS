import express = require('express');
import { BranchService } from '../service/BranchService';


const app = express();

const branchService = new BranchService();

app.get("/branch", (req, res) => {
    res.send(branchService.getAllBranches());
})

// app.listen(9090);