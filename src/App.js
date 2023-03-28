import './App.css';
import Route from './components/Route';
import TaskSeparator from './components/TaskSeparator';
import AccordionPage from './lessons/NavAndRoutingSection/pages/AccordionPage';
import DropdownPage from './lessons/NavAndRoutingSection/pages/DropdownPage';
import ButtonPage from './lessons/NavAndRoutingSection/pages/ButtonPage';
import UnderstandJsx from './lessons/UnderstandJsxSection';
import Components from './lessons/ComponentsSection';
import Seasons from './lessons/SeasonsSection';
import PicsFilterInput from './lessons/PicsFilterInputSection';
import StateSystem from './lessons/StateSystemSection';
import ApiApp from './lessons/UsingApiSection';
import Books from './lessons/HandleFormsSection';
import { Provider } from './lessons/HandleFormsSection/context/books';
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
        <Route path="/jsx">
          <TaskSeparator taskNumber="1 - Understanding Jsx"/>
          <UnderstandJsx />
        </Route>
        <Route path="/components">
          <TaskSeparator taskNumber="2 - Understanding Components"/>
          <Components />
        </Route>
        <Route path="/seasons-app">
          <TaskSeparator taskNumber="3 - Create Seasons App"/>
          <Seasons />
        </Route>
        <Route path="/pics-search-input">
          <TaskSeparator taskNumber="4 - Pics Filter Input App"/>
          <PicsFilterInput />
        </Route>
        <Route path="/state-system">
          <TaskSeparator taskNumber="5 - Understanding State System"/>
          <StateSystem /> 
        </Route>
        <Route path="/api-app">
          <TaskSeparator taskNumber="6 - Understanding Api"/>
          <ApiApp />
        </Route>
        <Route path="/books-app">
          <TaskSeparator taskNumber="7 - Understanding useState, useEffect, useCallback, Fetching"/>
          <Provider>
            <Books />
          </Provider>
        </Route>
      </div>
    </div>
  );
};

export default App;
