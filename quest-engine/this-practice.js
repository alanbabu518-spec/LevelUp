const user = {
  name: "Alan",
  totalXP: 120,

  showProfile() {
    console.log("User:", this.name);
    console.log("XP:", this.totalXP);
  },
};

user.showProfile();
