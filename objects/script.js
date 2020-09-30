function Course(title, instructor, level, views){
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.views = views;
  this.updateViews = function(){
    return ++this.views;
  }
}

var course01 = new Course("Java", "Joe", 1, 10);
var course02 = new Course("JavaScript", "Frank", 2, 56);

var courses = [course01, course02];

course01.updateViews();
courses[0].updateViews()

console.log(courses);
console.log(courses[0].updateViews());
console.log(courses[0]["title"]);
