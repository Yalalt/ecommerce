import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.css';
import './assets/css/templatemo-hexashop.css';
import './assets/css/owl-carousel.css';
import './assets/css/lightbox.css';
import { useEffect, useState } from 'react';
import Product from './components/Product.jsx';

function App() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=9")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <section className="section" id="products">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Our Latest Products</h2>
              <span>Check out all of our products.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {
            products.map((product) => (
              <Product product={product} key={product.id} />
            ))
          }




          <div className="col-lg-12">
            <div className="pagination">
              <ul>
                <li>
                  <a href="#">1</a>
                </li>
                <li className="active">
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">Next</a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

  )
}

export default App
