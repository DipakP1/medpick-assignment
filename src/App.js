import "./App.css";
import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <Sidebar />

      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <Box sx={{ flexGrow: 1, p: 3, overflow: "auto" }}>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
}

export default App;
