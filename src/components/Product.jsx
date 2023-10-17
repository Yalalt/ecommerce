import { Link } from 'react-router-dom';

function Product(props) {
  const product = props.product;

  return (
    <div className="col-lg-4">
      <div className="item">
        <div className="thumb">
          <div className="hover-content">
            <ul>
              <li>
                <a href="single-product.html">
                  <Link to={'/product/' + product.id}>
                    <i className="fa fa-eye" />
                  </Link>
                </a>
              </li>
              <li>
                <a href="single-product.html"><i className="fa fa-star" /></a>
              </li>
              <li>
                <a href="single-product.html"><i className="fa fa-shopping-cart" /></a>
              </li>
            </ul>
          </div>
          <img src={product.thumbnail} height={200} alt='' />
        </div>
        <div className="down-content">
          <h4>{product.title}</h4>
          <span>${product.price}</span>
          <ul className="stars">
            <li><i className="fa fa-star" /></li>
            <li><i className="fa fa-star" /></li>
            <li><i className="fa fa-star" /></li>
            <li><i className="fa fa-star" /></li>
            <li><i className="fa fa-star" /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Product;