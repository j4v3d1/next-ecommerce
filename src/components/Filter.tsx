import React from 'react'

export default function Filter() {
  return (
    <div className='mt-12 flex justify-between'>
        <div className="flex gap-6 flex-wrap">
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option>Type</option>
                <option value="physical">Physical</option>
                <option value="digital">Digital</option>
            </select>
            <input type="text" name='min' placeholder='min price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400' />
            <input type="text" name='max' placeholder='max price' className='text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400' />
            <select name="size" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option>Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            <select name="color" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option>Color</option>
                <option value="black">Black</option>
                <option value="white">White</option>
            </select>
            
            <select name="cat" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option>Category</option>
                <option value="New Arrival">Physical</option>
                <option value="Popular">Digital</option>
            </select>
            <select name="type" id="" className='py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]'>
                <option>All Filters</option>
                </select>    
        </div>
        <div className="">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
        >
            <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
          </div>
    </div>
  )
}
