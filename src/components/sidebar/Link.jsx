import { motion } from 'framer-motion'

const varients = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
}

const itemVarients = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 50,
    opacity: 0
  }
}

const closevVarients = {
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

const Link = ({ setOpen }) => {
  const items = ["Homepage", "Skills", "Parallax", "Projects", "Contact"];
  return (
    <motion.div className='absolute w-full h-full flex flex-col items-center justify-center gap-6' variants={varients}>
      {items.map((item, i) => (
        <motion.a className='text-3xl' onClick={()=> setOpen(false)} href={`#${item}`} key={i} variants={itemVarients} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>{item}</motion.a>
      ))}
    </motion.div>
  )
}

export default Link