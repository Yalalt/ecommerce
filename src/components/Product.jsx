import { Link } from 'react-router-dom';
import { ApplicationContext } from './Layout';
import { useContext } from 'react';

export default function Product(props) {
  const product = props.product;
  const { addToBasket } = useContext(ApplicationContext);

  if(!product) {
    return <div>Ачаалж...</div>;
  }

  return (
    <div className="col-lg-4">
      <div className="item">
        <div className="thumb">
          <div className="hover-content">
            <ul>
              <li>
                <Link to={'/product/' + product.id}>
                  <i className="fa fa-eye" />
                </Link>
              </li>
              <li>
                <Link onClick={() => addToBasket(product)}>
                  <i className="fa fa-shopping-cart" />
                </Link>
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