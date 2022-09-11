import React from "react";
import Asyncnew from "pages/Asyncnew";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/a" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Asyncnew />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
