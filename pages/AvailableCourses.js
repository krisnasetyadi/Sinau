import CoursesData from '../components/CoursesData';
import { useState, useEffect } from 'react';
import Simple from '../components/navbardashboard';
import Footer from '../components/footer';

export default function AvailableCourses() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCourses, setLoadedCourses] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://auth-sinau-cp10-default-rtdb.firebaseio.com/indexCourses.json')
      .then(responses => {
        return responses.json();
      })
      .then(data => {
        const coursesData = [];
        for ( const key in data) {
          const courseData = {
            id: key,
            ...data[key]
          };
          coursesData.push(courseData);
        }
        setIsLoading(false);
        setLoadedCourses(coursesData);
      });
    if (isLoading) {
      return ( <section>
        <p>Loading...</p>
      </section>);
    }
  },[isLoading]);

  return (
    <>
      <section>
        <Simple/>
        <CoursesData availVideos={loadedCourses} />
        <Footer/>
      </section>

    </>

  );
}