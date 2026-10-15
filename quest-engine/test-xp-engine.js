const {
  calculateXP,
  calculateLevel,
  getProgressToNextLevel,
} = require("./xp-engine");

console.log("XP:", calculateXP(12));
console.log("Level:", calculateLevel(120));
console.log("Progress:", getProgressToNextLevel(120));

console.log("XP for 0 tasks:", calculateXP(0));
console.log("Level at 200 XP:", calculateLevel(200));

console.log("\nTesting invalid inputs:");

try {
  calculateXP(-5);
} catch (error) {
  console.log("Negative tasks:", error.message);
}

try {
  calculateLevel(-100);
} catch (error) {
  console.log("Negative XP:", error.message);
}

try {
  calculateXP(2.5);
} catch (error) {
  console.log("Decimal tasks:", error.message);
}
