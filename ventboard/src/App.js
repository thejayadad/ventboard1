import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import MessageListing from './pages/MessageListing';
import MessagePage from './pages/MessagePage';
import Mission from './pages/Mission';
import NotFound from './pages/NotFound';
import Navbar from './layout/Navbar';
import Header from './layout/Header';

function App() {
  return (
    <div className='main'>

    <Router>
      <Header />
        <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/messagelisting' element={<MessageListing/>} />
        <Route exact path='/mission' element={<Mission/>} />
        <Route exact path='/messagepage/:messageId' element={<MessagePage/>} />
        <Route exact path='/messagepage' element={<NotFound/>} />
        </Routes>
        <Navbar />
    </Router>
    </div>


  );
}

export default App;
