import Course from "./Course";

function Courses({ courses ,removeCourse}) {
  console.log(courses);

  return (
    <div className="courseMainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="cardDiv">
        {
            courses.map((course)=>{
                return (
                    // <Course course={course}/>
                    //spread operatörü ile de yapabiliriz
                    <Course
                     key={course.id}
                     {...course} 
                     removeOneCourse ={removeCourse} />
                );

            })
        }
      </div>
    </div>
  );
}

export default Courses;
