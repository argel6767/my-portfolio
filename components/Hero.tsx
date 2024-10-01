import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
          <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-creen' fill = 'white'></Spotlight>  
          <Spotlight className='-top-10 -left-full md:-left-32 h-[80vh] w-[50vw]' fill = 'purple'></Spotlight>  
          <Spotlight className='-top-28 -left-80 h-[80vh] w-[50vw]' fill = 'blue'></Spotlight>  

        </div>
    </div>
  )
}

export default Hero