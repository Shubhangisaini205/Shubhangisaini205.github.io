import logo from './logo.svg';
import './App.css';
import AllRoutes from './AllRoutes/AllRoutes';
import Navbar from './component/Navbar';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import { Box } from '@chakra-ui/react';


function App() {
  return (
    <Box className="App" fontFamily={"cursive"} backgroundColor={"rgb(29, 28, 28)"}>
      <Navbar />
      <AllRoutes />



    </Box>
  );
}

export default App;
