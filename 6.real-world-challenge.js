/*
  Problem 1: Add Grade to Each Student (Without Changing Original)
  
  You have an array of student objects, each with name and marks.
  Create a NEW array where every student also has a "grade" field,
  based on their marks. The ORIGINAL array must stay exactly the same.

  Grading rule:
    marks >= 90 -> "A+"
    marks >= 80 -> "A"
    marks >= 60 -> "B"
    below 60    -> "Fail"

  Input:
    [
      { name: "Rafi", marks: 85 },
      { name: "Karim", marks: 45 }
    ]

  Output (new array):
    [
      { name: "Rafi", marks: 85, grade: "A" },
      { name: "Karim", marks: 45, grade: "Fail" }
    ]

  Original array must remain untouched (no "grade" field added to it).
*/

//function for marks:

const marksMaker = (marks) => {
  if (marks >= 90) {
    return "A+";
  } else if (marks >= 80) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else {
    return "Fail";
  }
};

const arrayOfObj = (array) => {
  const newArrayOfObj = array.map((info) => {
    const { name, marks } = info;
    const final = { name, marks, grade: marksMaker(marks) };
    return final;
  });
  return newArrayOfObj;
};
console.log(
  arrayOfObj([
    { name: "Rafi", marks: 85 },
    { name: "Karim", marks: 45 },
  ]),
);
