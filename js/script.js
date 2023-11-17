const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const body = document.querySelector("body");
const success = document.querySelector(".success");
const dance = document.querySelector(".dance");

// properties
const learning = {
  topic: "JS",
  learningGoals: [
    "Understand programming fundamentals",
    "Have Fun",
    "Build JS programs"
  ],
  category: "Front End Development",
  topicImportance: "high",
  hoursThisWeek: 2,
  weeklyHourGoal: 7,
  achievedStudyGoal: false,
  addStudyTime: function (hours) {
    this.hoursThisWeek += hours;
    if (this.hoursThisWeek >= this.weeklyHourGoal) {
      this.achievedStudyGoal = true;
      this.celebrate();
    }
  }, 
  // celebrate method
  celebrate: function() {
    body.classList.add("celebrate");
    success.classList.remove("hide");
    dance.classList.remove("hide");
  }
};
console.log(learning);

// call method
topicElement.innerText = `✔️ I'm learning ${learning.topic}.`;
  countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;

  topicElement.classList.remove("hide");
  countElement.classList.remove("hide");

  learning.addStudyTime(5);