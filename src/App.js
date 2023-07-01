import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';

// eslint-disable-next-line no-unused-expressions, no-undef
function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to = "/">A2ZSUPERSHOP</Link>
        </header>
        <main>
          <Routes>
            <Route path = "/product/:slug" element = {<ProductScreen />} />
            <Route path = "/" element = {<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;