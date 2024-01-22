import { createContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PropTypes from 'prop-types';
import { useAuth0 } from "@auth0/auth0-react";

export const ApplicationContext = createContext({ basket: [], setBasket: () => { } });
export default function Layout(props) {
    const { children } = props;
    const [basket, setBasket] = useState([]);
    const { user } = useAuth0();


    const addToBasket = (product) => {
        // Exist product then not add to products
        if(basket) {
            const existProduct = basket.find(item => item.id === product.id);

            if(existProduct) {
                return;
            }
        }

        setBasket([...basket, product]);

        const mutations = [
            {
                createOrReplace: {
                    _type: 'basket',
                    productId: product.id,
                    productName: product.title,
                    productPrice: product.price,
                    productQuantity: 1,
                    userId: user.sub,
                }
            }
        ];

        fetch(`https://${import.meta.env.VITE_SANITY_PROJECT_ID}.api.sanity.io/v2022-03-07/data/mutate/production`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_SANITY_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mutations })
        }).catch((error) => {
            console.log(error);
        });
    }

    const removeFromBasket = (product) => {
        const basketCopy = basket.filter(p => p.productId !== product.productId);
        setBasket(basketCopy);

        const mutations = [
            {
                delete: {
                    id: product._id,
                }
            }
        ];

        fetch(`https://${import.meta.env.VITE_SANITY_PROJECT_ID}.api.sanity.io/v2022-03-07/data/mutate/production`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${import.meta.env.VITE_SANITY_TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ mutations })
        }).catch((error) => {
            console.log(error);
        });
    };


    useEffect(() => {
        if (!user) {
            return;
        }

        const query = `*[_type == "basket" && userId == "${user.sub}"]`;

        fetch(`https://${import.meta.env.VITE_SANITY_PROJECT_ID}.api.sanity.io/v2022-03-07/data/query/production?query=${encodeURIComponent(query)}`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${import.meta.env.VITE_SANITY_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                res.json().then((data) => {
                    if (!data.error) {
                        setBasket(data.result);
                    }
                })
            });
    }, [user]);

    return (
        <ApplicationContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
            <Header />
            {children}
            <Footer />
        </ApplicationContext.Provider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
