import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductContainer from './ProductContainer';
import './InventoryObject.css'

const InventoryObject = () => {
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
        axios.get('http://localhost:8000/api/products/get/')
            .then(response =>{
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);
    
    if(loading) return <p>loading...</p>;
    if(error) return <p>Error: {error.message}</p>;

    return(
        <div className = 'inventoryobject'>
                {products.map(product =>(
                    <ProductContainer key = {product.id} product = {product}></ProductContainer>
                ))}
        </div>
    );
};

export default InventoryObject;

