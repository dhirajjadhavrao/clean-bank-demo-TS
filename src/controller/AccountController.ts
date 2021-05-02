import express = require("express");
import { AccountService } from "../service/AccountService";

const app = express();

const accountService = new AccountService();

app.get("/account", (req, res)=>{
    res.send(accountService.getAllAccounts);
});

app.get("/account/:number", (req, res)=>{
    console.log("into Method");
    const id = parseInt(req.params.number);
    res.send(accountService.getAccountDetails(id));
});

app.post("/account", (req, res)=>{
    const account = req.body;
    console.log(account);
})

app.listen(9090);