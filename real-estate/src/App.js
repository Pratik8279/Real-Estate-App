import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Favourite from './components/Favourites/Favourite';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
         <Route path= "/" element = {<Home/>}/>
         <Route path= "/favourites" element= {<Favourite/>}/>
       </Routes>
    </div>
  );
}

export default App;
