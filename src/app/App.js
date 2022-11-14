import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from '../AppHeader/AppHeader';
import Task1 from '../Tasks/Task1';
// const Task1 = lazy(() => import('../Task1/Task1'));
import Task2 from '../Tasks/Task2';
import Task3 from '../Tasks/Task3';
import Task4 from '../Tasks/Task4';
import Task5 from '../Tasks/Task5';
import Task6 from '../Tasks/Task6';
import Task7 from '../Tasks/Task7';
import Task8 from '../Tasks/Task8';
import Task9 from '../Tasks/Task9';
import Task10 from '../Tasks/Task10';
import Task11 from '../Tasks/Task11';
import Task12 from '../Tasks/Task12';
import Task13 from '../Tasks/Task13';
import Task14 from '../Tasks/Task14';
import Task15 from '../Tasks/Task15';
import Task16 from '../Tasks/Task16';

import './App.css';

function App() {
  return (
    <Router>
      <div className='app'>
        <AppHeader/>
        <main>
          <Suspense>
            <Routes>
              <Route path="/" element={<div>HOME</div>}/>
              <Route path="/task1" element={<Task1/>}/>
              <Route path="/task2" element={<Task2/>}/>
              <Route path="/task3" element={<Task3/>}/>
              <Route path="/task4" element={<Task4/>}/>
              <Route path="/task5" element={<Task5/>}/>
              <Route path="/task6" element={<Task6/>}/>
              <Route path="/task7" element={<Task7/>}/>
              <Route path="/task8" element={<Task8/>}/>
              <Route path="/task9" element={<Task9/>}/>
              <Route path="/task10" element={<Task10/>}/>
              <Route path="/task11" element={<Task11/>}/>
              <Route path="/task12" element={<Task12/>}/>
              <Route path="/task13" element={<Task13/>}/>
              <Route path="/task14" element={<Task14/>}/>
              <Route path="/task15" element={<Task15/>}/>
              <Route path="/task16" element={<Task16/>}/>
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
