import logo from './logo.svg';
import './App.css';

import Home from './component/Home';
import Routesnav from './component/Routesnav';
import DataStore from './component/Store/DataStore';
import Footer from './component/HomeBarner/Footer';
import Header from './component/Header/Header';


function App() {
  return (
    <div className='App' >
      <Header/>
    <Routesnav/>
   <DataStore/>
   <Footer/>
    </div>
  );
}

export default App;
