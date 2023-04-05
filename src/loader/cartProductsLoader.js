import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();


    //if cart data is in database , you have use acync await .
    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

// if u need to send two things.
// return [products, savedCart]
//or
// return {products, savedCart}

    return savedCart;



    // console.log(products)
    // return products;
}
export default cartProductsLoader;