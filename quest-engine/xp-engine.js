const XP_PER_TASK = 10;
const XP_PER_LEVEL = 100;

function calculateXP(completedTasks) {
  if (!Number.isInteger(completedTasks) || completedTasks < 0) {
    throw new error("Completed tasks must be non-negative integer");
  }
  return completedTasks * XP_PER_TASK;
}

function calculateLevel(totalXP) {
  if (!Number.isInteger(totalXP) || totalXP < 0) {
    throw new Error("Total XP must be a non-negative integer.");
  }

  return Math.floor(totalXP / XP_PER_LEVEL) + 1;
}

function getProgressToNextLevel(totalXP) {
  if (!Number.isInteger(totalXP) || totalXP < 0) {
    throw new Error("Total XP must be a non-negative integer.");
  }
  return totalXP % XP_PER_LEVEL;
}

module.exports = {
  calculateXP,
  calculateLevel,
  getProgressToNextLevel,
};
