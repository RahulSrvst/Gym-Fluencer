import React from 'react'
import { SlCalender } from "react-icons/sl";

const Blog = () => {
  return (
    <div id='blogs' > 
    <div className='text-5xl text-center pt-6 pb-10 font-medium text-red-600 uppercase' >
        Our Latest Blogs
    </div>
        <div className='flex   px-10'>
            <div className='w-[75%] relative ' >
                <img src='https://framerusercontent.com/images/Ak1npcHaOL6HZDqt4s8onDlRbY.jpg?scale-down-to=1024' alt='blog' className='h-[600px] w-[900px] rounded-2xl ' />

                <div className='text-white absolute bottom-16 ml-6' >
                    <div className='bg-red-600 w-[15%] pl-5 rounded-md py-1 ' >  
                        Exercise
                    </div>
                    <div className='text-3xl font-medium' >
                    Conquering Consistency: How to Make Exercise A 
                    </div>
                    <div className='text-3xl font-medium' >
                    Habit You Love
                    </div>

                    <div className='flex items-center space-x-2'  style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    <SlCalender className='mr-2' /> June 28 , 2024 | <img src='https://framerusercontent.com/images/HH8KrojyxZx6X20z1r13CSwiiWE.jpg?scale-down-to=512' alt='Error'  className='w-6 rounded-full ' />  Benjamin
                    </div>
                </div>
            </div>
            <div className='w-[25%] flex flex-col ' >
                <div className='w-[490px] relative'>
                    <img src='https://framerusercontent.com/images/eZhVZiqwYqckpfqk8iVFqSYsQk.jpg?scale-down-to=1024'  alt='blog' className='-ml-40 h-[85%] w-full rounded-2xl '  />
                    <div className='text-white absolute bottom-16  -ml-36 ' >
                    <div className='bg-orange-600 whitespace-nowrap w-[34%] pl-5 rounded-md py-1 ' >  
                        Weight Loss
                    </div>
                    <div className='text-xl font-medium' >
                    Weight Loss: A Sustainable Approach for 
                    </div>
                    <div className='text-xl font-medium' >
                    a Healthier You
                    </div>

                    <div className='flex items-center space-x-2'  style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    <SlCalender className='mr-2' /> June 28 , 2024 | <img src='https://framerusercontent.com/images/5P0eN6qtSxQg8Lrk6rw2GR9e7eI.jpg?scale-down-to=1024' alt='Error'  className='w-6 rounded-full' />  Benjamin
                    </div>
                </div>
                </div>
                <div className='w-[490px] relative' >
                    <img src='https://framerusercontent.com/images/vC9giEjmPcdMUbgxGuPwaw1fJg.jpg'  alt='blog' className='-ml-40 h-[85%] w-full rounded-2xl'/>
                    <div className='text-white absolute bottom-16 -ml-36' >
                    <div className='bg-green-600 w-[25%] pl-5 rounded-md py-1 ' >  
                        Nutrition
                    </div>
                    <div className='text-xl font-medium' >
                    Fuel Your Fitness: A Guide to Nutrition for 
                    </div>
                    <div className='text-xl font-medium' >
                    Peak Performance 
                    </div>

                    <div className='flex items-center space-x-2'  style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    <SlCalender className='mr-2' /> June 28 , 2024 | <img src='https://framerusercontent.com/images/G1bC6MQnKLl8c7ZyjwpJlVGuw.jpg?scale-down-to=512' alt='Error'  className='w-6 rounded-full' />  Benjamin
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog