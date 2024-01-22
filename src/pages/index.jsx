import '../assets/css/bootstrap.min.css';
import '../assets/css/font-awesome.css';
import '../assets/css/templatemo-hexashop.css';
import '../assets/css/owl-carousel.css';
import '../assets/css/lightbox.css';
import Product from '../components/Product.jsx';
import { Link } from 'react-router-dom';
import useData from '../hooks/useData.jsx';

function App() {
  const { data, loading } = useData("https://dummyjson.com/products?limit=9", { products: [] });
  
  if (loading) {
    return <div>Ачаалж...</div>
  }
  const products = data.products;
    
  return (
    <>
      <div className="page-heading" id="top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-content">
                <h2>Шинэ бүтээгдэхүүн ирлээ</h2>
                <span>2024 оны Шинэ загварын цахилгаан бараанууд</span>
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
                <h2>Шинэ бүтээгдэхүүнүүд</h2>
                <span>Сар шинийн урамшуулалтай шинэ бүтээгдэхүүнүүд.</span>
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
                  <li className="active">
                    <Link to="#">1</Link>
                  </li>
                  <li>
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

export default App;
