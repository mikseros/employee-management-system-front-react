import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className="container">
              <Routes>
                <Route path="/" element={<ListEmployeeComponent />} />
                <Route path="/employees" element={<ListEmployeeComponent />} />
                {/* step1 */} 
                <Route path="/add-employee/:id" element={<CreateEmployeeComponent />} />
                {/* <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} /> */}
              </Routes>
            </div>
          <FooterComponent/>
      </Router>
    </div>
    
  );

}

export default App;
