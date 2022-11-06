import './App.css';
import TaskSeparator from './shared/TaskSeparator';
import UnderstandJsx from './lessons/UnderstandJsx';
import Components from './lessons/Components';
import Seasons from './lessons/Seasons';
import PicsFilterInput from './lessons/PicsFilterInput';

function App() {
  return (
    <div>
      <TaskSeparator taskNumber="1"/>
      <UnderstandJsx />
      <TaskSeparator taskNumber="2"/>
      <Components />
      <TaskSeparator taskNumber="3"/>
      <Seasons />
      <TaskSeparator taskNumber="4"/>
      <PicsFilterInput />
    </div>
   
  );
};

export default App;
