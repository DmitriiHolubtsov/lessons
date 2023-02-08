import './App.css';
import TaskSeparator from './shared/TaskSeparator';
// import UnderstandJsx from './lessons/UnderstandJsx';
// import Components from './lessons/Components';
// import Seasons from './lessons/Seasons';
// import PicsFilterInput from './lessons/PicsFilterInput';
// import EventSystem from './lessons/EventSystem';
// import StateSystem from './lessons/StateSystem';
import ApiApp from './lessons/Api';


function App() {
  return (
    <div>
      {/* <TaskSeparator taskNumber="1"/>
      <UnderstandJsx />
      <TaskSeparator taskNumber="2"/>
      <Components />
      <TaskSeparator taskNumber="3"/>
      <Seasons />
      <TaskSeparator taskNumber="4"/>
      <PicsFilterInput />
      <TaskSeparator taskNumber="5"/>
      <EventSystem />
      <TaskSeparator taskNumber="6"/>
      <StateSystem /> */}
      <TaskSeparator taskNumber="7"/>
      <ApiApp />
    </div>
   
  );
};

export default App;
