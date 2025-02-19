"use client"
import React, { use, useState } from "react";
import { ProductList } from "./ProductList";

export const Headers = ({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
}) => {
    const [active, setActive] = useState(false);

    const onDeleteProduct = product => {
        const result = allProducts.filter(
            item => item.id !== ProductList.id
        );

        setTotal(total - product.price * product.quantity);
        setCountProducts(countProducts - product.quantity);
        setAllProducts(result);
    }

    const onCleanCart = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };

    return (
        <header>
            <h1>Tienda de Libros</h1>
            <div className="container-icon">
                <div className="container-cart-icon" onClick={() => setActive(!active)}>
                    <img src="data:image/png;base64,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" alt="carrito" className="icon-cart" />
                    <div className="count-products">
                        <span id="contador-productos">{countProducts}</span>
                    </div>
                </div>


                <div className={`container-cart-products} ${active ? '' : 'hidden-cart'
                    }`}
                >
                    {allProducts.length ? (
                        <>
                            <div className='row-product'>
                                {allProducts.map(product => (
                                    <div className='cart-product' key={product.id}>
                                        <div className='info-cart-product'>
                                            <span className='cantidad-producto-carrito'>
                                                {product.quantity}
                                            </span>
                                            <p className='titulo-producto-carrito'>
                                                ${product.title}
                                            </p>
                                            <span className="precio-producto-carrito">
                                                ${product.price}
                                            </span>
                                        </div>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9xLcO_F9jFertLKhEBxFPtywTlGK0AdmbfJAX9sDSiH4k8vCpEwOg3UG935Hk61MP4es&usqp=CAU" alt="cerrar" className="icon-close" onClick={() => onDeleteProduct(product)} />
                                    </div>
                                ))}
                            </div>
                            <div className='cart-total'>
                                <h3>Total:</h3>
                                <span className='total-pagar'>${total}</span>
                            </div>
                            <button className='btn-clear-all' onClick={onCleanCart}>
                                Vaciar Carrito
                            </button>
                        </>
                    ) : (
                        <p className='cart-empty'>El carrito está vacío</p>
                    )}
                </div>
            </div>
        </header>
    );
};