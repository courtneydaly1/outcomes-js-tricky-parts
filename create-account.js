function createAccount(pin, amount=0) {
return {
    checkBal(inputPin){
        if (inputPin !== pin) return 'Invalid PIN.';
        return `$${amount}`;
    },
    deposit(inputPin, newAmt){
        if(inputPin != pin) return "Invalid PIN.";
        amount += newAmt;
        return  `Deposit successful of $${newAmt}. Your current balance; $${amount}.`;
    },
    withdrawl(inputPin, withdrawlAmt){
        if(inputPin != pin) return "Invalid PIN.";
        if(withdrawlAmt > amount)
            return "Withdrawl exceeds acct balance. Transaction canceled.";
        amount -= withdrawlAmt;
        return `Successfuly withdrew $${withdrawlAmt}. Current Balance $${amount}.`
    },
    changePin(oldPin, newPin){
        if(oldPin !== pin) return "Invalid PIN";
        pin = newPin;
        return "PIN has been successfully updated."
    }
};
}

module.exports = { createAccount };
