import './App.css';
import TaskSeparator from './shared/TaskSeparator';
import Jsx from './lessons/Jsx';
import Components from './lessons/Components';
import Seasons from './lessons/Seasons';
import PicsFilterInput from './lessons/PicsFilterInput';

function App() {
  return (
    <div>
      <TaskSeparator taskNumber="1"/>
      <Jsx />
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
