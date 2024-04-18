#! /usr/bin/env node
import inquirer from "inquirer"


const Currency: any = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    KWD: 0.31,
    CAD: 1.36
};

let user_answer = await inquirer.prompt(
    [
        {
           name:'from',
           message:"Enter From Currency",
           type:'list',
           choices: ['USD','EUR','GBP','INR','PKR','KWD','CAD']
        },
         
        {
            name:'to',
            message:"Enter To Currency",
            type:'list',
            choices: ['USD','EUR','GBP','INR','PKR','KWD','CAD']
        },
        
        {
            name:'amount',
            message:"Enter your amount",
            type:'number',
        }
    ]       
)

let fromAmount = Currency[user_answer.from]
let toAmount = Currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convetedAmount = baseAmount * toAmount
console.log(convetedAmount);
