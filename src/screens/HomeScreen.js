import { useEffect, useReducer } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
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
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
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

By usine <Row> <Col> </Col> </Row> components from bootstrap we can put items next to each other. And if there are no space remain empty in the
line then the items will take places from new line. 

For pushing down new items down we will fix it. Assume there can be three types of screen. One is small screen(sm), 
Second one is manual screen(ms) and larger screen(ms). 
For the small screen like mobile the ratio is 6:12. It means for small screen each line will contain 2 items(12/6 = 2).
For the manual screen like tablet the ratio is 4:12. It means for manual screen each line will contain 3 items(12/4 = 3).
For the large screen like computer the ratio is 3:12. It means for large screen each line will contain 4 items(12/3 = 4).
And we will fix this inside <Col> component.
mb-3 class will create space between spaces.
*/