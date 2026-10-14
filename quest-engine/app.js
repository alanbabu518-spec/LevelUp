// const goal  = {
//     title : "Learn MERN Stack",
//     category :"Web development",
//     totalTasks: 3,
//     completedTasks:1,
//     isActive: true
// }

// console.log("Goal",goal);
// console.log("Goal title:", goal.title);
// console.log("Completed tasks:", goal.completedTasks);

const tasks = [
  { title: "Learn JavaScript", completed: true },
  { title: "Learn React", completed: true },
  { title: "Learn Node.js", completed: false },
  { title: "Learn MongoDB", completed: true },
];

// console.log("All tasks:", tasks);
// console.log("First task:", tasks[0].title);
// console.log("Is the first task completed?", tasks[0].completed);
// console.log("second task",tasks[1].title)
// console.log("is this task completed",tasks[1].completed)

const tasksTitles = tasks.map((task) => task.title);
console.log("Tasks Titles", tasksTitles);

const competedTasks = tasks.filter((task) => task.completed);
console.log("Completed Tasks", competedTasks);

const completdCount = tasks.reduce((count, task) => {
  return task.completed ? count + 1 : count;
}, 0);

console.log("Completed Count:", completdCount);

const pendingTasks = tasks.filter((task) => {
  return task.completed == false;
});
console.log("pending tasks", pendingTasks);

const completdTitles = tasks
  .filter((task) => task.completed == true)
  .map((task) => task.title);

  console.log("Complted Task Titles:",completdTitles)

const completedCount = tasks.reduce((count,task)=>{
    return task.completed ? count+1 : count;
},0)

const totalTasks = tasks.length;

const percentage = (completdCount/totalTasks*100)


console.log("Completed:", completedCount);
console.log("Total:", totalTasks);
console.log("Progress:", percentage + "%");
