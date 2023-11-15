import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoronaHospAdd from "./components/CoronaHospAdd";
import CoronaHospSearch from "./components/CoronaHospSearch";
import CoronaHospView from "./components/CoronaHospView";
import CoronaHospDelete from "./components/CoronaHospDelete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<CoronaHospAdd />}></Route>
        <Route path="search" element={<CoronaHospSearch />}></Route>
        <Route path="view" element={<CoronaHospView />}></Route>
        <Route path="delete" element={<CoronaHospDelete />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
