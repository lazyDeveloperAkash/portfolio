import React from 'react'
import { motion } from 'framer-motion'
import { HiMiniSparkles } from "react-icons/hi2";
import "./skillText.css"

const slideInFromTop = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            duration: 0.5,
        },
    },
};

const slideInFromLeft = (delay)=> {
    return {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}
const slideInFromRight= (delay)=> {
    return {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}

const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <motion.div variants={slideInFromTop} className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'>
                <HiMiniSparkles className='text-[#b49bff] mr-[10px] h-5 w-5' />
                <h1 className='Welcome-text text-[13px]'>Think Better with MERN</h1>
            </motion.div>
            <motion.div variants={slideInFromLeft(0.5)} className='text-[30px] text-white font-medium mt[10px] text-center mb-[15px]'>Making web apps with modern technologys</motion.div>
            <motion.div variants={slideInFromRight(0.5)} className='cursive text-[20px] text-green-200 mt-[10px] text-center'>Perfect work</motion.div>
        </div>
    )
}

export default SkillText