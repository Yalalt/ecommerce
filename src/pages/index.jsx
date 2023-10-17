import '../assets/css/bootstrap.min.css';
import '../assets/css/font-awesome.css';
import '../assets/css/templatemo-hexashop.css';
import '../assets/css/owl-carousel.css';
import '../assets/css/lightbox.css';
import { useEffect, useState } from 'react';
import Product from '../components/Product.jsx';
import { Link } from 'react-router-dom';

function Index() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=9")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <>
      <div className="page-heading" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <h2>Check Our Products</h2>
                <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                    <Link to="#">1</Link>
                  </li>
                  <li className="active">
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">3</Link>
                  </li>
                  <li>
                    <Link to="#">4</Link>
                  </li>
                  <li>
                    <Link to="#">Next</Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Index;
