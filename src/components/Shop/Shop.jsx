import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart=[];
        //console.log(storedCart);

        //step 1 : get id
        for (const id in storedCart) {

            //step 2: get the product by using id
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                //step3: get quantity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //step 4: add the added Product to the saved Cart
                savedCart.push[addedProduct];
                

            }


            //console.log(addedProduct);

        }
        //set the cart
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">

                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;