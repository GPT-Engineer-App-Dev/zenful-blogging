import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useColorMode, Button } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";

function App() {
  const ColorModeSwitcher = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
      <Button onClick={toggleColorMode} position="fixed" top="1rem" right="1rem">
        {colorMode === "light" ? "Dark" : "Light"} Mode
      </Button>
    );
  };

  return (
    <Router>
      <ColorModeSwitcher />
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/add-post" element={<AddPost />} />
      </Routes>
    </Router>
  );
}

export default App;
