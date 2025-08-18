
import './App.css';
import CourseSearch from './components/CourseSearch';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import CourseValue from './components/CourseValue';

function App() {
  return (
    <div className='container is-fluid'>
      <CourseForm/>
      <CourseSearch/>
      <CourseList/>
      <CourseValue/>
    </div>
  );
}

export default App;
