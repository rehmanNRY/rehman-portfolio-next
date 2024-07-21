"use client"
import React from 'react'
import { useInView } from 'react-intersection-observer';


const Page = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <div ref={ref} className={`${inView ? 'text-red-400' : 'text-blue-500'} pt-40`}>
    Change my color as you scroll!
  </div>
  )
}

export default Page