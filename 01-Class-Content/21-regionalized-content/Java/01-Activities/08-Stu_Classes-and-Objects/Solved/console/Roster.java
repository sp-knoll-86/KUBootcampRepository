package console;

import java.util.ArrayList;

class Roster {

  private ArrayList<Student> students;

  Roster() {
    this.students = new ArrayList<Student>();
  }

  void add(Student student) {
    this.students.add(student);
  }

  void clear() {
    this.students.clear();
  }

  void report() {
    for (Student student : this.students) {
      student.report();
    }
  }

}
