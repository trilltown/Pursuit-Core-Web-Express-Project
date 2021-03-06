const Class = require('./Class');
const Student = require('./Student')

class School {
  constructor() {
    this.classes = [];
  }


  addClass(name, teacher) {
    let newClass = new Class(name, teacher);
    this.classes[name] = newClass;
  }

  enrollStudent(className, student) {
    let newStudent = new Student(student.name, student.city, student.age, student.grade)
    if (this.classes.hasOwnProperty(className)) {
      this.classes[className].students.push(newStudent)
    }
    return newStudent; 
  }

  /**
   * Get all students enrolled in a class
   * 
   * @param {string} className - Name of the class
   * @return {Student[]} Array of Student objects
   */
  getStudentsByClass(className) {
      let classNames = this.classes
      for(let i = 0; i < classNames.length; i++) {
        if(classNames[i].name === classNames) {
         return classNames[i].students
        } 
      }
    }
  /**
   * Get all students and apply filters. If failing = true
   * return all students that are failing the class, 
   * that is all students whose grade is less than 70.
   * If a city is passed return students whose city match
   * the city passed. If both failing and city are passed
   * return students that are failing and that live in the
   * specified city
   * 
   * @param {string} className - Name of the class
   * @param {boolean} failing - Whether to return students that are failing the class or not
   * @param {string} city - Name of the city to match against students
   * @return {Student[]} Array of Student objects
   */
//   getStudentsByClassWithFilter(className, failing, city) {

// }
}

module.exports = School;

