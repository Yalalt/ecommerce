import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ApplicationContext } from "../components/Layout";

export default function Product() {
    const params = useParams();
    const [product, setProduct] = useState(null);

    const { basket, setBasket } = useContext(ApplicationContext);

    useEffect(() => {
        fetch("https://dummyjson.com/product/" + params.id)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            });
    }, []);

    if (!product) {
        return <div>...</div>;
    }

    return (
        <>
            <div className="page-heading" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content">
                                <h2>Single Product Page</h2>
                                <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section" id="product">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="left-images">
                                {product.images.map((image) => (
                                    <img key={image.id} src={image} alt="Product title" />
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="right-content">
                                <h4>{product.title}</h4>
                                <span className="price">${product.price}</span>
                                <ul className="stars">
                                    <li>
                                        <i className="fa fa-star" />
                                    </li>
                                    <li>
                                        <i className="fa fa-star" />
                                    </li>
                                    <li>
                                        <i className="fa fa-star" />
                                    </li>
                                    <li>
                                        <i className="fa fa-star" />
                                    </li>
                                    <li>
                                        <i className="fa fa-star" />
                                    </li>
                                </ul>
                                <span>
                                    {product.description}
                                </span>
                                <div className="quote">
                                    <i className="fa fa-quote-left" />
                                    <p>
                                        {product.description}.
                                    </p>
                                </div>
                                <div className="quantity-content">
                                    <div className="left-content">
                                        <h6>No. of Orders</h6>
                                    </div>
                                    <div className="right-content">
                                        <div className="quantity buttons_added">
                                            <input type="button" defaultValue="-" className="minus" />
                                            <input
                                                type="number"
                                                step={1}
                                                min={1}
                                                max=""
                                                name="quantity"
                                                defaultValue={1}
                                                title="Qty"
                                                className="input-text qty text"
                                                size={4}
                                                pattern=""
                                                inputMode=""
                                            />
                                            <input type="button" defaultValue="+" className="plus" />
                                        </div>
                                    </div>
                                </div>
                                <div className="total">
                                    <h4>Total: $210.00</h4>
                                    <div className="main-border-button">
                                        <Link key={'singleprodlink_' + product.id} to="#" onClick={() => setBasket([...basket, product])}>Add To Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}