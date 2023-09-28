/* eslint-disable no-undef */
import { useSelector , useDispatch } from "react-redux";
import Button from "../components/Button";
import { removeFromCart } from '../features/Cart/cartSlice'
import NavBar from "../components/Navbar";
import Nav2 from "../components/Nav2";
import Footer from "../components/Footer";
import { useForm, Controller } from "react-hook-form";
import Cookies from 'js-cookie';
import Axios from 'axios';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total= useSelector ((state)=>state.cart.totalPrice)
  const formattedTotalPrice = `$${total.toFixed(2)}`;

  const { handleSubmit, control, setValue } = useForm();

  const handleRemoveFromCart = (bookId) => {
    dispatch(removeFromCart(bookId));
    console.log(bookId)
  };


  const onSubmit = async (data) => {

   
    // Extract bookIDs from cartItems

    const bookIDs = cartItems.map((item) => item.book._id);
  
    // Prepare the order data to send to the server
    const orderData = {
      bookIDs,
      shippingDetails: {
        address: data.address,
        postalCode: data.postalCode,
        country: data.country,
      },
      totalPrice: total,
    };

  console.log(orderData)
  
  try {
    // Get the JWT token from cookies
    const token = Cookies.get('accessToken'); // Replace with your actual cookie name

    // Set up Axios with the authorization header
    const axiosInstance = Axios.create({
      baseURL: 'http://localhost:5000/api', // Replace with your API endpoint
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // Include the JWT token in the Authorization header
      },
    });

    // Send a POST request to create the order
    const response = await axiosInstance.post('/orders', orderData);

    if (response.status === 201) {
      // Order created successfully
      const order = response.data;
      console.log('Order created:', order);
      alert("order created")

      // You can redirect the user to an order confirmation page or perform any other actions here
    } else {
      // Handle the case where order creation failed
      console.error('Error creating order');
    }
  } catch (error) {
    console.error('Error creating order:', error);
  }
  };

  return (
    <div className="">
      

<NavBar/>
      <Nav2/>
      <div>
      <h1 className=" text-[36px] flex items-center text-[#237943] justify-center  font-[600] leading-9 my-10">Check Out</h1>
      </div>
     <div className=" grid grid-cols-6 px-32">
      <div className=" col-span-3">
      <div className=" ">
        <h2 className=" text-[31px]  font-[700] leading-9 mb-4">Billing Details</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-7">
            <div className="flex gap-12 items-center">
              <div className="flex flex-col">
                <label className="text-[16px] font-[500] leading-5 mb-2">First Name:</label>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      className="px-20 w-full py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  )}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[16px] font-[500] leading-5 mb-2">Last Name:</label>
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type="text"
                      {...field}
                      className="px-20 w-full py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] font-[500] leading-5 mb-2">Address:</label>
              <Controller
                name="address"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="px-20 w-full py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                )}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] font-[500] leading-5 mb-2">Postal Code:</label>
              <Controller
                name="postalCode"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="px-20 w-full py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                )}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] font-[500] leading-5 mb-2">Country:</label>
              <Controller
                name="country"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="px-20 w-full py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                )}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] font-[500] leading-5 mb-2">City:</label>
              <Controller
                name="city"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="px-20 w-full py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  />
                )}
              />
            </div>
            <button
              type="submit"
              className="px-20 py-2 bg-[#237943] text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              Check OUT
            </button>
          </form>
      </div>
        <div className=" col-span-3">
        <div className="flex flex-col items-center justify-center pt-10 mb-24">
        <div>Shopping Cart</div>
        <div className="bg-white shadow-md p-5">
          {cartItems.map((item) => (
            <div key={item.book.id} className="flex items-center justify-between gap-12 border-b-[1px] py-3 ">
              <div className="h-32 w-24 rounded-md bg-[#F5F5F5] flex items-center justify-center ">
                <img
                  className="w-full h-full object-cover object-center"
                  src={`https://res.cloudinary.com/dmeqlpc2o/image/upload/${item.book.image}`}
                  alt={item.book.name}  
                />
              </div>
              <div className="text-2xl font-medium">{item.book.name}</div>
              <div className="text-xl text-green-400">${item.book.price.toFixed(2)}</div>
              <div className=" flex flex-col items-center justify-center gap-3">Quantity: {item.quantity}
              <Button onClick={() => handleRemoveFromCart(item.book._id)}>
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
     </div>

     <Footer/>


    </div>
  );
};

export default Cart;
