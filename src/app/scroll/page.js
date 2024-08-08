"use client"
import BallPool from '@/components/BallPool'
import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Scroll = () => {
  // useGSAP(() => {
  //   gsap.from(".ball-container",{
  //     duration: 1,
  //     delay: 1.5,
  //     rotateX: -100,
  //     opacity: 0,
  //     stagger: .2,
  //     ease: "elastic.out(1, 0.7)",
  // })
  // })
  return (
    <div className='h-[100vh] w-[100vw] ball-container'>
      <BallPool />
    </div>
  )
}

export default Scroll