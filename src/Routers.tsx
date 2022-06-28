import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';

export default function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
<<<<<<< HEAD
                <Route path='/landing' element={<Landing/>}/>
=======
                <Route path='/landing' element={<Landing/>} />
>>>>>>> c8abd95bd83254e683b3a833fd9ec7f132d64ffc
            </Routes>
        </BrowserRouter>
    );
}