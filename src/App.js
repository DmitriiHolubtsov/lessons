import './App.css';
import TaskSeparator from './shared/TaskSeparator';
import Jsx from './lessons/Jsx';
import Components from './lessons/Components';

function App() {
  return (
    <div>
      <TaskSeparator taskNumber="1"/>
      <Jsx />
      <TaskSeparator taskNumber="2"/>
      <Components />
    </div>
   
  );
};

export default App;
