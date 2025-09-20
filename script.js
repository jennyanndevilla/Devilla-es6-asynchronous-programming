class Student {
  constructor(id, name, age, course) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.course = course;
  }

  introduce() {
    return this.name + " (" + this.age + ") - " + this.course;
  }
}

class Instructor {
  constructor(id, name, subject) {
    this.id = id;
    this.name = name;
    this.subject = subject;
  }

  teach() {
    return this.name + " - " + this.subject;
  }
}

function fetchDataWithPromises() {
  fetch("data/students.json")
    .then(function(response) { return response.json(); })
    .then(function(data) {
      console.log("Using Promises:", data);
    })
    .catch(function(error) { console.error(error); });
}

async function fetchDataWithAsync() {
  try {
    const response = await fetch("data/students.json");
    const data = await response.json();
    console.log("Using Async/Await:", data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function displayData() {
  const response = await fetch("data/students.json");
  const data = await response.json();

  const output = document.getElementById("output");
  output.innerHTML = "";


  output.innerHTML += "<h2>Students:</h2>";
  data.students.forEach(function(s) {
    const student = new Student(s.id, s.name, s.age, s.course);
    output.innerHTML += "<p>- " + student.introduce() + "</p>";
  });


  output.innerHTML += "<h2>Courses:</h2>";
  data.courses.forEach(function(c) {
    output.innerHTML += "<p>- " + c.title + ": " + c.description + "</p>";
  });

  output.innerHTML += "<h2>Instructors:</h2>";
  data.instructors.forEach(function(i) {
    const instructor = new Instructor(i.id, i.name, i.subject);
    output.innerHTML += "<p>- " + instructor.teach() + "</p>";
  });
}
displayData();
