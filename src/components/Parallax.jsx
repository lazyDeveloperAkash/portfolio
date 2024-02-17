import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Parallax = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  const xBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);

  return (
    <div ref={ref} className='w-full h-full bg-gradient-to-b from-[#111136] via-[#111136] to-[#5e5e76] relative overflow-hidden flex justify-center items-center'>
      <motion.h1 className='text-center text-[12vmax] md:text-[7vmax]' style={{y: yText}}>What I Did?</motion.h1>
      <motion.div className='absolute bg-contain bg-no-repeat md:bg-cover bg-bottom w-full h-full z-30' style={{ backgroundImage: 'url("./mountains.png")' }}></motion.div>
      <motion.div className='absolute bg-contain bg-no-repeat md:bg-cover bg-bottom w-full h-full z-20' style={{ backgroundImage: 'url("./sun.png")', y: yBg }}></motion.div>
      <motion.div className='absolute bg-cover bg-bottom w-full h-full z-10' style={{x: xBg, backgroundImage: 'url("./stars.png")' }}></motion.div>
    </div>
  )
}

export default Parallax