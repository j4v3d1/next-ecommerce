import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductList() {
  return (
    <div className='mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>

        <Link href='/text' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className="relative w-full h-80">
            <Image src="https://images.pexels.com/photos/24415102/pexels-photo-24415102/free-photo-of-a-woman-in-white-is-looking-at-hats-on-a-shelf.jpeg" alt="" fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
            <Image src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg" alt="" fill sizes='25vw' className='absolute object-cover rounded-md'/>
        </div>
        <div className="flex justify-between">
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className='rounded-2xl ring-1 w-max ring-lama text-lama py-2 px-4 text-sx hover:bg-lama hover:text-white'>Add to Cart</button>
        </Link>
        <Link href='/text' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className="relative w-full h-80">
            <Image src="https://images.pexels.com/photos/24415102/pexels-photo-24415102/free-photo-of-a-woman-in-white-is-looking-at-hats-on-a-shelf.jpeg" alt="" fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
            <Image src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg" alt="" fill sizes='25vw' className='absolute object-cover rounded-md'/>
        </div>
        <div className="flex justify-between">
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className='rounded-2xl ring-1 w-max ring-lama text-lama py-2 px-4 text-sx hover:bg-lama hover:text-white'>Add to Cart</button>
        </Link> 
        <Link href='/text' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className="relative w-full h-80">
            <Image src="https://images.pexels.com/photos/24415102/pexels-photo-24415102/free-photo-of-a-woman-in-white-is-looking-at-hats-on-a-shelf.jpeg" alt="" fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
            <Image src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg" alt="" fill sizes='25vw' className='absolute object-cover rounded-md'/>
        </div>
        <div className="flex justify-between">
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className='rounded-2xl ring-1 w-max ring-lama text-lama py-2 px-4 text-sx hover:bg-lama hover:text-white'>Add to Cart</button>
        </Link> 
        <Link href='/text' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
        <div className="relative w-full h-80">
            <Image src="https://images.pexels.com/photos/24415102/pexels-photo-24415102/free-photo-of-a-woman-in-white-is-looking-at-hats-on-a-shelf.jpeg" alt="" fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
            <Image src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg" alt="" fill sizes='25vw' className='absolute object-cover rounded-md'/>
        </div>
        <div className="flex justify-between">
            <span className='font-medium'>Product Name</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className='rounded-2xl ring-1 w-max ring-lama text-lama py-2 px-4 text-sx hover:bg-lama hover:text-white'>Add to Cart</button>
        
        </Link>
        
        </div>
  )
}
