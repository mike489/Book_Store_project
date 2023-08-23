export default function SingleBook({ data }) {
    return (
      <div className='related-item-single'>
        <img src={data.image} alt="" />
        <h2 className='related-item-price'>{data.price}</h2>
        <p className='related-item-title'>{data.title}</p>
        <button className="bg-green-500 text-white px-4 py-2 rounded mt-2 hover:bg-green-600">
          Add to Cart
        </button>
      </div>
    )
  }
