import './App.css';
import Route from './components/Route';
// import TaskSeparator from './shared/TaskSeparator';
import AccordionPage from './lessons/NavAndRoutingSection/pages/AccordionPage';
import DropdownPage from './lessons/NavAndRoutingSection/pages/DropdownPage';
import ButtonPage from './lessons/NavAndRoutingSection/pages/ButtonPage';
// import UnderstandJsx from './lessons/UnderstandJsx';
// import Components from './lessons/Components';
// import Seasons from './lessons/Seasons';
// import PicsFilterInput from './lessons/PicsFilterInput';
// import StateSystem from './lessons/StateSystem';
// import ApiApp from './lessons/UsingApi';
// import Books from './lessons/HandleFormsSection';
// import { Provider } from './lessons/HandleFormsSection/context/books';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="container ms-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/">
          <DropdownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
      </div>
      {/* <TaskSeparator taskNumber="1 - Understanding Jsx"/>
      <UnderstandJsx />
      <TaskSeparator taskNumber="2 - Understanding Components"/>
      <Components />
      <TaskSeparator taskNumber="3 - Create Seasons App"/>
      <Seasons />
      <TaskSeparator taskNumber="4 - Pics Filter Input App"/>
      <PicsFilterInput />
      <TaskSeparator taskNumber="5 - Understanding State System"/>
      <StateSystem /> 
      <TaskSeparator taskNumber="6 - Understanding Api"/>
      <ApiApp /> 
      <TaskSeparator taskNumber="7 - Understanding useState, useEffect, useCallback, Fetching"/>
      <Provider>
        <Books />
      </Provider> */}
      {/* <TaskSeparator taskNumber="8 - Understanding Navigation and Routing Systems"/> */}
    </div>
  );
};

export default App;
