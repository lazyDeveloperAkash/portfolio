import { useState } from 'react';
import Link from '../sidebar/Link'
import ToggleButton from './ToggleButton'
import { motion } from 'framer-motion'

const varients = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 400,
      z: 1000
    }
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    }
  }
}

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div animate={open ? 'open' : 'closed'} className='flex flex-col items-center justify-center bg-white text-black'>
      <motion.div className='fixed top-0 left-0 w-[80vw] md:w-[350px] z-[999] bg-white bottom-0' variants={varients}>
        <Link />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div >
  )
}

export default Sidebar