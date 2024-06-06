import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Index, AboutUs, PricingMonthly, PricingYearly, Login} from '../page/page';

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
        </Route>
      </Routes>
    </Router>
  );
};

export default Path;
