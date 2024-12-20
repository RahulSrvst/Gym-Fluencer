import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/HomePage";
import DietPlanForm from "./Components/DietPage/DietPlanForm";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import DietPlan from "./Components/DietPage/DietPlan";
import WorkOutPlan from "./Components/WorkOutPlan/WorkOutPlan";


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/dietplan"  element={<DietPlan/>} />
          <Route path="/workoutplan"  element={<WorkOutPlan/>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
