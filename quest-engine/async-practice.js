function saveGoal(goalTitle) {
  return new Promise((resolve, reject) => {
    if (!goalTitle || goalTitle.trim() === "") {
      reject(new Error("Goal title is required"));
      return;
    }

    resolve(`Goal "${goalTitle}" saved successfully`);
  });
}

async function main() {
  try {
    const message = await saveGoal("");
    console.log(message);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

main();
