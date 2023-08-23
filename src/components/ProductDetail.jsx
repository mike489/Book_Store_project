
import React, { useState } from 'react';
import RelatedItems from './RelatedItems';

export default function ProductDetail() {
  const [number, setNumber] = useState(1);

  return (
    <div className="product-detail pl-20 pt-20">
      <div className="product-upper flex gap-2">
        <img
          src="https://images.unsplash.com/photo-1691812778844-b6849ac08222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-520 h-605 "
        />
        <div className="buttons flex flex-col gap-4 w-1/2 m-20">
          <div className="min-buttons flex flex-col gap-7">
            <h1 className="text-4xl font-bold">Simple way of piece life</h1>
            <div className="flex items-center gap-2">
              <span className="text-red-500 font-semibold line-through text-2xl ">-15%</span>
              <span className="font-semibold text-2xl">15 Birr</span>
            </div>
            <b className="text-green-700 text-3xl">300 Birr</b>
          </div>
          <div className="cart-controller flex items-center gap-4 w-40 h-16 bg-gray-50 rounded-md">
            <button
              onClick={() => setNumber(Math.max(number - 1, 1))}
              className="w-16 h-16 bg-gray-300 text-2xl rounded"
            >
              -
            </button>
            <h4 className="text-xl font-bold">{number}</h4>
            <button onClick={() => setNumber(number + 1)}
              className="w-16 h-16 bg-green-300 text-2xl rounded"
            >
              +
            </button>
          </div>
          <div className="main-buttons flex flex-col justify-start w-608">
            <button variant="contained" className="w-full h-16 text-xl font-bold bg-green-500">
              Add to cart
              
            </button>
            <button variant="outlined" className="w-full h-16 text-green-500 border-2 border-green-500 mt-4">
              Save
            </button>
          </div>
          <p className="text-xs text-gray-400">$10.00 cart minimum to order</p>
        </div>
      </div>
      <div className="product-bottom flex gap-4">
  <div className="bottom-buttons p-4 w-1/3 border rounded border-gray-300">
    <button className="mb-2 text-lg font-bold text-gray-800">Description</button>
    <hr className="my-2 border-t border-gray-400" />
    <button className="mb-2 text-lg  text-gray-800">Nutritional Facts</button>
    <hr className="my-2 border-t border-gray-400" />
    <button className="mb-2 text-lg  text-gray-800">Features</button>
    <hr className="my-2 border-t border-gray-400" />
    <button className="mb-2 text-lg  text-gray-800">Producers</button>
  </div>
  <div className="bottom-text w-2/3 grid gap-8 pr-1 text-gray-600 text-sm">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sequi asperiores perferendis hic mollitia temporibus omnis quis ipsam doloribus eligendi deserunt sit, nihil unde qui repellat, rem alias illum eos?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas iure eaque vero quisquam incidunt blanditiis. Quos, sequi repellendus sit ratione doloribus ducimus numquam hic temporibus suscipit amet. Culpa, natus? 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cum culpa libero nam neque autem officia vitae dolorum est fugit repellendus nobis voluptatum voluptas eos ab ipsam eaque accusantium laborum?
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis quasi eius adipisci voluptatum ab consequatur modi obcaecati placeat error. Dicta voluptas a eveniet voluptatum libero ea vero inventore quia nobis!
    </p>
    <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sequi asperiores perferendis hic mollitia temporibus omnis quis ipsam doloribus eligendi deserunt sit, nihil unde qui repellat, rem alias illum eos?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas iure eaque vero quisquam incidunt blanditiis. Quos, sequi repellendus sit ratione doloribus ducimus numquam hic temporibus suscipit amet. Culpa, natus? 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cum culpa libero nam neque autem officia vitae dolorum est fugit repellendus nobis voluptatum voluptas eos ab ipsam eaque accusantium laborum?
      Lorem ipsum dolor, sit amet consectetur
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sequi asperiores perferendis hic mollitia temporibus omnis quis ipsam doloribus eligendi deserunt sit, nihil unde qui repellat, rem alias illum eos?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas iure eaque vero quisquam incidunt blanditiis. Quos, sequi repellendus sit ratione doloribus ducimus numquam hic temporibus suscipit amet. Culpa, natus? 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cum culpa libero nam neque autem officia vitae dolorum est fugit repellendus nobis voluptatum voluptas eos ab ipsam eaque accusantium laborum?
      Lorem ipsum dolor, sit amet consecteturLorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sequi asperiores perferendis hic mollitia temporibus omnis quis ipsam doloribus eligendi deserunt sit, nihil unde qui repellat, rem alias illum eos?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas iure eaque vero quisquam incidunt blanditiis. Quos, sequi repellendus sit ratione doloribus ducimus numquam hic temporibus suscipit amet. Culpa, natus? 
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, cum culpa libero nam neque autem officia vitae dolorum est fugit repellendus nobis voluptatum voluptas eos ab ipsam eaque accusantium laborum?
      Lorem ipsum dolor, sit amet consectetur</p>
  </div>
</div>
<RelatedItems />


    </div>
  );
}
