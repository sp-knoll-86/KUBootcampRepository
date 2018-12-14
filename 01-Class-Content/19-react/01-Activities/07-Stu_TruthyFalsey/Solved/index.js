// 1. Update this function to use a short circuit evaluation to set a default value for `something`
// Think back to node and how we set a PORT 😉
const logMessage = message => {
  message = message || "Hello World!";
  console.log(message);
};

logMessage();

// 2. Update the code below to set `message` using a ternary expression (variable = conditional ? value : otherValue)

const logTired = beenWorkingAllDay => {
  const message = beenWorkingAllDay ? "I'm feeling really tired" : "I'm wide awake!";
  console.log(message);
};

logTired(true);
