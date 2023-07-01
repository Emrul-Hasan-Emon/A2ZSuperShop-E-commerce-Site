import { useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logger from 'use-reducer-logger';
// import data from '../data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          products.map((product) => (
            <div className="product" key={product.slug}>
              <Link to={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="product-info">
                <Link to={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </Link>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default HomeScreen;

/*
Line 7 - 23 -> Here we are converting products to JSX to display.

Line 10 - 12 -> We linked the image with product details page. Whenever any one click on the product image, it will redirect the user to product details page.

Line 15 -17 -> We linked the image name with product details page. Whenever any one clicks on the product name, it will redirect the user to product details page.

Line 6 -> UseState() returns an array which contain variable products and a function setProducts to update the variable.

useEffect is a function of react hook which receives two paramters. First one is function and second one is an array.

useReducer receives two parameters. One is current currentstate and another one is action which is going to change the state.

action.payload contains all product from backend.

dispatch is used to call an action and for updating the state.

With the help of use-reducer-logger we can find is there any issue occuring while change states. It means we can debug the
states from developer tools. We can see each state and consequences action. Then we can easily understand what is happening each time.
*/