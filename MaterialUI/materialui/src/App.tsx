import './App.css';
import { LessonButton } from './components/LessonButton';
import LessonButtonGroup from './components/LessonButtonGroup';
import LessonCheckBox from './components/LessonCheckBox';
import LessonRadioExample from './components/LessonRadioExample';
import LessonRadioGroup from './components/LessonRadioGroup';
import LessonSelect from './components/LessonSelect';
import LessonTextField from './components/LessonTextField';
import { LessonTypography } from './components/LessonTypography';

function App() {
  return (
    <div className="App">
      {/* <LessonTypography/> */}
      {/* <LessonButton/> */}
      {/* <LessonButtonGroup/> */}
      {/* <LessonTextField /> */}
      {/* <LessonRadioGroup/> */}
      {/* <LessonRadioExample/> */}
      {/* <LessonSelect/> */}
      <LessonCheckBox/>
    </div>
  );
}

export default App;
