const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");
const body = document.querySelector("body");
const success = document.querySelector(".success");
const dance = document.querySelector(".dance");

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
  weeklyHourGoal: 7
};

topicElement.innerText = `✔️ I'm learning ${learning.topic}.`;
countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;

topicElement.classList.remove("hide");
countElement.classList.remove("hide");
