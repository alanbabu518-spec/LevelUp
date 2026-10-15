
const createXPWallet = require("./xp-wallet");

const wallet = createXPWallet();

console.log("Starting XP:", wallet.getXP());
console.log("After first task:", wallet.earnXP(10));
console.log("After second task:", wallet.earnXP(10));
console.log("Current XP:", wallet.getXP());
