import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Index, AboutUs, PricingMonthly, PricingYearly, Login, Register, Tips1, Tips2, Todo} from '../page/page';

const Path = () => {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<Index />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/PricingMonthly" element={<PricingMonthly />} />
          <Route path="/PricingYearly" element={<PricingYearly/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Tips1" element={<Tips1/>} />
          <Route path="/Todo" element={<Todo/>} />
          <Route path="/Tips2" element={<Tips2/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Path;
