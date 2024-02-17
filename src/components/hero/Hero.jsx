import { motion } from 'framer-motion'
import { useState } from 'react'
import AutoTypeText from './AutoTypeText'
import Button from '../Button'

const textVarients = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const sliderVarients = {
    initial: {
        x: "-50%"
    },
    animate: {
        x: "-550%",
        opacity: 1,
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20,
            staggerChildren: 0.1
        }
    },
}

const svgVarients = {
    initial: {
        x: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
            staggerChildren: 0.1
        }
    }
}

const svgVarients2 = {
    initial: {
        y: 0,
    },
    animate: {
        y: [-10, 10, -10],
        opacity: 1,
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear"
        }
    }
}

const Hero = () => {
    const [isFirstAnimationComplete, setFirstAnimationComplete] = useState(false);
    return (
        <div className='relative overflow-hidden flex items-center justify-center'>
            <div className='h-[calc(100vh-100px)] w-[95vw] md:w-[78vw] flex flex-col md:flex-row'>
                <motion.div className='h-full w-full md:w-3/5 flex flex-col gap-6 items-center md:items-start' variants={textVarients} initial="initial" animate="animate">
                    <motion.div variants={textVarients} className='text-center md:text-left'>
                        <motion.h2 className='tracking-[10px] text-[2vmax] text-[#663399] mb-[2.5vmax]' variants={textVarients}>AKASH BHAUMIK</motion.h2>
                        <motion.h1 className='leading-[5vmax] md:leading-[8vmax] text-[5.8vmax]'
                            variants={textVarients}>
                            And I am a
                            <span>
                                <AutoTypeText speed={100} />
                            </span>
                        </motion.h1>
                    </motion.div>
                    <motion.div className='z-[998] flex gap-4' variants={textVarients}>
                        <Button>
                            <a href="#Projects">
                            <motion.button className='md:p-4 p-3 bg-white rounded-2xl flex items-center justify-center cursor-pointer' variants={textVarients}>
                                <p className='relative z-[999] transition-color duration-400 ease-linear text-black hover:text-white'>See My Projects</p>
                            </motion.button>
                            </a>
                        </Button>
                        <Button>
                            <a href="#Contact">
                            <motion.button className='md:p-4 p-3 bg-white rounded-2xl flex items-center justify-center cursor-pointer' variants={textVarients}>
                                <p className='relative z-[999] transition-color duration-400 ease-linear text-black hover:text-white'>Contact me</p>
                            </motion.button>
                            </a>
                        </Button>
                    </motion.div>
                    <motion.img variants={textVarients} animate="scrollButton" className='w-12' src="./scroll.png" alt="" />
                </motion.div>
                <div className='w-full md:w-2/5 md:h-full h-[60%] '>
                    <motion.svg
                        id="sw-js-blob-svg"
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="100%"
                        height="100%"
                        variants={isFirstAnimationComplete ? svgVarients2 : svgVarients}
                        initial="initial" animate="animate"
                        onAnimationComplete={() => setFirstAnimationComplete(true)}
                    >
                        <defs>
                            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                                <stop id="stop1" stopColor="#5e5e76" offset="0%"></stop>
                                <stop id="stop2" stopColor="#111136" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <mask id='mask' mask-type='alpha'>
                            <path
                                fill="url(#sw-gradient)"
                                d="M22.4,-26.7C29.6,-20.7,36.4,-14.1,37.7,-6.6C39.1,0.9,35.1,9.4,30,16.6C25,23.8,18.9,29.6,12,31.4C5.1,33.2,-2.7,31,-10.8,28.5C-18.9,26.1,-27.3,23.3,-31.9,17.4C-36.6,11.5,-37.6,2.3,-35,-5.1C-32.4,-12.6,-26.3,-18.3,-19.9,-24.5C-13.5,-30.6,-6.7,-37.2,0.4,-37.7C7.6,-38.3,15.2,-32.7,22.4,-26.7Z"
                                transform="translate(50 50)"
                                strokeWidth="0"
                            ></path>
                        </mask>
                        <g mask="url(#mask)">
                            <path
                                fill="url(#sw-gradient)"
                                d="M22.4,-26.7C29.6,-20.7,36.4,-14.1,37.7,-6.6C39.1,0.9,35.1,9.4,30,16.6C25,23.8,18.9,29.6,12,31.4C5.1,33.2,-2.7,31,-10.8,28.5C-18.9,26.1,-27.3,23.3,-31.9,17.4C-36.6,11.5,-37.6,2.3,-35,-5.1C-32.4,-12.6,-26.3,-18.3,-19.9,-24.5C-13.5,-30.6,-6.7,-37.2,0.4,-37.7C7.6,-38.3,15.2,-32.7,22.4,-26.7Z"
                                transform="translate(50 50)"
                                strokeWidth="0"
                            ></path>
                            <image href="./hero.png" x="10" y="10" width="75" height="75" />
                        </g>
                    </motion.svg>
                </div>
            </div>
            <motion.div className='absolute w-1/2 font-bold bottom-0 leading-none text-[50vh] whitespace-nowrap text-[#ffffff09]' variants={sliderVarients} initial="initial" animate="animate">
                Web Developer and Ui Disgner
            </motion.div>
        </div>
    )
}

export default Hero