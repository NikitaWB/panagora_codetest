import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productDataOne from '../data/1.json'
import productDataTwo from '../data/2.json'
import productDataThree from '../data/3.json'
import productDataFour from '../data/4.json'
import productDataFive from '../data/5.json'
import productDataSix from '../data/6.json'
import productDataSeven from '../data/7.json'
import productDataEight from '../data/8.json'

function ProductDetalils( {addToCart}) {
    const { id } = useParams()
    const [data, setData] = useState({});
    const { name, price, currency, description, image } = data;
    const fullPrice = `${price} ${currency}`;

    useEffect( () => {
        switch (id) {
            case '1':
                setData(productDataOne)
                break;
            case '2':
                setData(productDataTwo)
                break;
            case '3':
                setData(productDataThree)
                break;
            case '4':
                setData(productDataFour)
                break;
            case '5':
                setData(productDataFive)
                break;
            case '6':
                setData(productDataSix)
                break;
            case '7':
                setData(productDataSeven)
                break;
            case '8':
                setData(productDataEight)
                break;
            default:
                break;
        }
    },[id])

    return(
        <div className="product-details">
            <h3 className="product-details__title">{name}</h3>
            <img src={image} className="product-details__image" alt={name} />
            <p className="product-details__info">{ description }</p>
            <p className="product-details__price"> { fullPrice } </p>
            <button className="product-details__button" onClick={() => addToCart(id)}>Add to cart</button>
        </div>

    )
}

export default ProductDetalils