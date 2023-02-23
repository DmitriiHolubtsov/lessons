import './App.css';
import TaskSeparator from './shared/TaskSeparator';
// import UnderstandJsx from './lessons/UnderstandJsx';
// import Components from './lessons/Components';
// import Seasons from './lessons/Seasons';
// import PicsFilterInput from './lessons/PicsFilterInput';
// import StateSystem from './lessons/StateSystem';
// import ApiApp from './lessons/UsingApi';
import Books from './lessons/HandleForms';
import { Provider } from './context/books';


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
      <StateSystem /> 
      <TaskSeparator taskNumber="6"/>
      <ApiApp /> */}
      <TaskSeparator taskNumber="7"/>
      <Provider>
        <Books />
      </Provider>
    </div>
  );
};

export default App;
