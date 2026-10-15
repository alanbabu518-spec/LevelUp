function createXPWallet(){
    let totalXP = 0 

    return {
        earnXP(amount){
            if(!Number.isInteger(amount)  || amount <=0){
                throw new Error("XP must be a postive integer")
            }

            totalXP += amount 
            return totalXP
        },

        getXP(){
            return totalXP
        }
    }
}

module.exports = createXPWallet;