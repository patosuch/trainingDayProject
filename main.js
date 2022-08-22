
const getRandEvent = function() {
    const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// I dont understand why let days cant go in each if statment and how you can define 
// a variable without assigning it to anything with an equal sign. 

const getTrainingDays = function(event) {
    let days;

  if (event === 'Marathon') {
        days = 50;
  } else if (event === 'Triathlon') {
        days = 100;
  } else if (event === 'Pentathlon') {
        days = 200;
  }
  return days;
};


const logEvent = function(name, event) { 
  console.log(`${name}'s event is: ${event}`);
};

const logTime = function(name, days) {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
const name = 'Nala';
logEvent(name, event);
logTime(name, days);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
logEvent(name2, event2);
logTime(name2, days2);
