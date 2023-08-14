import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className=' mx-[50px]  mt-[200px] grid grid-cols-3'>
        <div className=' col-span-1 flex flex-col gap-20'>
            <div className=' flex flex-col gap-7'>
              <div>  LOGO</div>
              <div> 
                <ul>
                    <li className=' text-[16px] font-normal text-[#29292E]'>221 B Santa Monica, Los Angeles</li>
                    <li className=' text-[16px] font-normal text-[#29292E]'>(+1) 923 2341 22</li>
                    <li className=' text-[16px] font-normal text-[#29292E]'>Contact@tanahairstudio.com</li>
                </ul>
              </div>
            </div>
            <div>
              <p className=' text-[16px] font-normal text-[#29292E]'>@2020 TanahAir Studio. All rights reserved.</p>
            </div>
        </div>
        <div className=' col-span-1 flex justify-between items-center  '>
             <div className=' flex flex-col gap-4'>
                <div>Categories</div>
                <div>
                    <ul className=''>
                        <li className='text-[12px] font-normal text-[#29292E] mb-3'>Dairy & Milk</li>
                        <li className='text-[12px] font-normal text-[#29292E] mb-3'>Fresh Produce</li>
                        <li className='text-[12px] font-normal text-[#29292E] mb-3'>Meat</li>
                        <li className='text-[12px] font-normal text-[#29292E] mb-3'>Snacks</li>
                        <li className='text-[12px] font-normal text-[#29292E] mb-3'>Frozen</li>
                        <li className='text-[12px] font-normal text-[#29292E] mb-3'>Vegetables</li>
                    </ul>
                </div>
             </div>
             <div className=' flex flex-col gap-4'>
                <div>Categories</div>
                <div>
                    <ul className=''>
                        <li className='text-[12px] font-normal text-[#29292E] mb-3'>Dairy & Milk</li>
                        <li className='text-[12px] font-normal text-[#29292E] mb-3'>Fresh Produce</li>
                        <li className='text-[12px] font-normal text-[#29292E] mb-3'>Meat</li>
                        <li className='text-[12px] font-normal text-[#29292E] mb-3'>Snacks</li>
                        <li className='text-[12px] font-normal text-[#29292E] mb-3'>Frozen</li>
                        <li className='text-[12px] font-normal text-[#29292E] mb-3'>Vegetables</li>
                    </ul>
                </div>
             </div>
        </div>
        <div></div>

      </div>
    </div>
  )
}

export default Footer
