import Add from '@/components/Add'
import CustomizedProducts from '@/components/CustomizedProducts'
import ProductImages from '@/components/ProductImages'
import React from 'react'

export default function SinglePage() {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max ">
        <ProductImages />
      </div>
      {/* IMG */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className='text-4xl font-medium'>Product Name</h1>
        <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi error dolore est itaque inventore ipsam fuga accusantium consectetur aliquam delectus dolorem odio porro eveniet, in nihil suscipit officia. Reprehenderit, enim.</p>
        <div className="h-[2px] bg-gray-100"></div>
        <div className="flex items-center gap-4">
          <h3 className='text-xl text-gray-500 line-through'>$59</h3>
          <h2 className='font-medium text-2xl'>$45</h2>
        </div>
        <div className="h-[2px] bg-gray-100"></div>
        <CustomizedProducts />
        <Add />
        <div className="h-[2px] bg-gray-100"></div>
        <div className="text-sm">
          <h4 className='font-medium mb-4'>Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, rerum eveniet alias velit, sit est fuga, dignissimos odit quas nesciunt labore molestias placeat blanditiis nulla quibusdam neque deserunt nisi cumque?</p>
        </div>
        <div className="text-sm">
          <h4 className='font-medium mb-4'>Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, rerum eveniet alias velit, sit est fuga, dignissimos odit quas nesciunt labore molestias placeat blanditiis nulla quibusdam neque deserunt nisi cumque?</p>
        </div>
        <div className="text-sm">
          <h4 className='font-medium mb-4'>Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, rerum eveniet alias velit, sit est fuga, dignissimos odit quas nesciunt labore molestias placeat blanditiis nulla quibusdam neque deserunt nisi cumque?</p>
        </div>

        </div>
    </div>
  )
}
