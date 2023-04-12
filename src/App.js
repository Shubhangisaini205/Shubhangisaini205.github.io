import logo from './logo.svg';
import './App.css';
import AllRoutes from './AllRoutes/AllRoutes';
import Navbar from './component/Navbar';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import { Box } from '@chakra-ui/react';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';


function App() {
  return (
    <Box className="App" fontFamily={"cursive"} backgroundColor={"rgb(29, 28, 28)"}>
      <Navbar />
      {/* <AllRoutes /> */}
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </Box>
  );
}

export default App;
