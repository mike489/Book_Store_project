/* eslint-disable no-undef */
import { useSelector , useDispatch } from "react-redux";
import Button from "../components/Button";
import { removeFromCart } from '../features/Cart/cartSlice'

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total= useSelector ((state)=>state.cart.totalPrice)
  const formattedTotalPrice = `$${total.toFixed(2)}`;

  const handleRemoveFromCart = (bookId) => {
    dispatch(removeFromCart(bookId));
  };

  return (
    <div className="bg-[#FAFAFA]">
      <div className="flex flex-col items-center justify-center pt-10 mb-24">
        <div>Shopping Cart</div>
        <div className="bg-white shadow-md p-5">
          {cartItems.map((item) => (
            <div key={item.book.id} className="flex items-center justify-between gap-12 border-b-[1px] py-3 ">
              <div className="h-32 w-24 rounded-md bg-[#F5F5F5] flex items-center justify-center ">
                <img
                  className="w-full h-full object-cover object-center"
                  src={item.book.imageSrc}
                  alt={item.book.name}  
                />
              </div>
              <div className="text-2xl font-medium">{item.book.name}</div>
              <div className="text-xl text-green-400">${item.book.price.toFixed(2)}</div>
              <div className=" flex flex-col items-center justify-center gap-3">Quantity: {item.quantity}
              <Button onClick={() => handleRemoveFromCart(item.book.id)}>
               Removetem Item 
             </Button>
              </div>
            </div>
          ))}
          <div className=" flex items-center justify-center text-3xl text-red-400">
             {formattedTotalPrice}
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
