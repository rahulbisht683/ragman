{
  /*
  const a = [12, 2, 1, 332];

//console.log(a.push(33));
//console.log(a.pop());

//For each loop in javascript
const ra = "rahulbisht";
const tt = ra.split("");
//console.log(tt);

var count = 0;

tt.forEach((word) => {
  if (word === "a") {
    count = count + 1;
  } else {
  }
});

const days = ["day1", "day2", "day3", "day4"];

const aa = function () {};

a.forEach((day) => {
  if (day == "day2") {
    aa();
  }
});

const valur = {
  name: "rahul",
  class: 10,
  house: "tiger",
};
const valur2 = {
  name: "rahul",
  class: 10,
  house: "lion",
};

const man = (power) => {
  return {
    king1: `I am from te house of ${valur.house}`,
    king2: `I am from te house of ${valur2.house}`,
  };
};
const finalking = man(valur);
//console.log(finalking.king1);

/////////////////////////////METHODS//////////////////////////
// if we are creating a thing inside a class or an

/// find element i array

// .findindex((function(todo , index){} )) 

try {
  
} catch (error) {
  
}

if error occurs it will not freeze the programme 


                                    MAPS and For Of */
}

const ram = {
  name: "ram",
  class: 10,
  place: "Delhi",
};
const shyam = {
  name: "shyam",
  class: 10,
  place: "Delhi",
};
const dham = {
  name: "don",
  class: 10,
  place: "Delhi",
};
const man = {
  name: "pon",
  class: 10,
  place: "Delhi",
};

const user = new Map();

user.set("ram", ram);
user.set("shyam", shyam);
user.set("dham", dham);
user.set("man", man);

console.log(user);

for (const key of user.keys()) {
  console.log(key);
}
for (const value of user.values()) {
  console.log(value.name);
}

for ([key, value] of user.entries()) {
  console.log(key + "=" + value.name);
}
