import React from 'react';

const PurchasesComponent = ({purchases}) => {
    console.log(purchases);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(purchases.createdAt).toLocaleDateString('en-us', options);
    

    return (
        <div>
            
            <div>
                <h4>{date}</h4>
                <ul>
                    <li>{purchases.cart.products[0]?.title}</li>
                    <li>$ {purchases.cart.products[0]?.price}</li>
                    <li>Items: {purchases.cart.products[0]?.productsInCart.quantity}</li>
                </ul>

            </div>
        </div>
    );
};

export default PurchasesComponent;