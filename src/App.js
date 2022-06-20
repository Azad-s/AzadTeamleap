import { Box } from "@mui/system";
import DashBoard from "./dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

      <Header >
      <Routes>
      <Route exact path="*" element={ <DashBoard />} />
        <Route exact path="/home" element={ <DashBoard />} />
        <Route exact path="/tasks" element={ <DashBoard />} />
      </Routes>
      </Header>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
