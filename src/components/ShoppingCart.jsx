import React, { useState } from 'react';

import './ShoppingCart.css'; // Import your CSS file

function ShoppingCart() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddToCart = (e) => {
    const itemId = e.target.dataset.itemId;
    setCartItemCount(cartItemCount + 1);

    const item = e.target.parentNode.cloneNode(true);
    item.lastElementChild.innerText = 'Buy-now';

    setSelectedItems([...selectedItems, item]);
  };

  return (
    <div>
      <h1>
        <i className="fa fa-shopping-cart"></i>
        {cartItemCount > 0 && <span className="count">{cartItemCount}</span>}
      </h1>
      <section className="items">
        <div className="item">
          <img src="image/043.jpg" alt="Item 1" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, quo, modi ea voluptas tempora vero
            cumque incidunt eum animi
          </p>
          <h6>$345.89</h6>
          <span></span>
          <button data-item-id="1" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
        {/* ... Repeat similar code for other items ... */}
      </section>
      <div className={`select ${selectedItems.length > 0 ? 'display' : ''}`}>
        {selectedItems.map((item, index) => (
          <div key={index} className="item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
