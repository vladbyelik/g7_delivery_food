import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import ProductList from '../ProductList/ProductList';
import './App.scss';


function App() {
  return (
    <div className="App">
      <main className='main'>
        <div className='container'>
          <Router>
            <Header />
            
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/restaurant/:products" element={<ProductList />}/>
            </Routes>
            
          </Router>
        </div>
      </main>
    </div>
  );
}

export default App;
