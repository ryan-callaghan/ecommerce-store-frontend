import React from 'react';
import './InventoryContainer.css';
import InventoryObject from './InventoryObject';

const InventoryContainer = () => {
    return(
        <div className = 'inventorycontainer'>
            <h1>Products</h1>
            <InventoryObject></InventoryObject>
        </div>
    )
}

export default InventoryContainer;