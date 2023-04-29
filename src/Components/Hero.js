import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import ComputerCanvas from './canvas/ComputerCanvas'

const Hero = () => {
  return (
    <section className='reltive w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='h-5 w-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}> Hi, I,m <span className='text-[#915eff]'>chithirai vel</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100` }>I develop 3D visual ,user <br className='sm:block hidden'/> Interface and webApplication</p>

        </div>
      </div>
      <ComputerCanvas/>
    </section>
  )
}

export default Hero