import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import Recipe from './pages/recipe/Recipe';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Create from './pages/create/Create';

import './App.css'
import './index.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/search' element={<Search />} />
          <Route path='/recipes/:id' element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
