import React from 'react'
import Image from 'next/image'
import { CustomButton } from '.'

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero_title">
          Find, book, or rent a car - quickly and easily!
        </h1>

        <p className="hero_subtitle">
          Streamline your car rental experience with our effortless booking process.
        </p>

        <CustomButton />
      </div>
      </div>
  )
}

export default Hero