class BankAccount{
    customerName;
    accountNumber;
    balance;

    constructor(customerName,balance){
        this.customerName = customerName;
        this.accountNumber = Math.floor(Math.random())*10;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
    }
}
const pcAccount = new BankAccount('pc',500);
pcAccount.deposit(200);
console.log(BankAccount.prototype.__proto__);
console.log(pcAccount.__proto__.__proto__);
