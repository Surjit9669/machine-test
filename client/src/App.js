
import './App.css';
import { Routes, Route } from 'react-router-dom';

import ChatApp from './components/ChatApp';
import Home from './components/Home';
import UserLoginReg from './components/UserLoginReg';
import UploadVideo from './components/UploadVideo';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/upload/file/Video' element={<UploadVideo />}></Route>
        <Route path='/user/chat' element={<ChatApp />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/' element={<UserLoginReg />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

