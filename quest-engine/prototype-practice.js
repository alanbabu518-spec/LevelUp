const learnerMethods = {
  introduce() {
    console.log(`I am ${this.name}`);
  },
};

const learner = Object.create(learnerMethods);
learner.name = "Alan";

learner.introduce();
