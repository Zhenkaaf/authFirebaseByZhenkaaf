
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (

    <div className='App'>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>


  );
}

export default App;
