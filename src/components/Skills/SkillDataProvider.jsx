import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../../App.css'

const SkillDataProvider = ({ src, width, height, index }) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    const imageVarients = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const animationDelay = 0.3;

    return (
        <motion.div ref={ref} initial="hidden" variants={imageVarients} animate={inView ? "visible" : "hidden"} custom={index} transition={{ delay: index * animationDelay }} >
            <img src={src} className='icons' width={width} height={height} alt="skill image" />
        </motion.div>
    )
}

export default SkillDataProvider