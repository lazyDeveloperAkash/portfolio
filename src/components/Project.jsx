import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import '../App.css'

const projects = [
    {
        id: "1",
        title: "peer to peer Chat app",
        image: "https://assets.materialup.com/uploads/40e8e1d0-df31-4016-bcec-bbed3b26fc16/preview.png",
        desc: "Successfully developed a feature-rich peer-to-peer chat application with real-time communication, secure data storage, and a responsive user interface.",
        link: "https://github.com/lazyDeveloperAkash/chatApp_frontend"
    },
    {
        id: "2",
        title: "Intern Wings",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*fb4FUaTZeAELD3OKtXf3hQ.png",
        desc: "It delivers a user-friendly platform tailored for both students and employees. InternWings serves as a versatile tool, empowering students to seamlessly explore opportunities and enabling companies to efficiently manage and post job/internship openings.",
        link: "https://github.com/lazyDeveloperAkash/internWings_Frontend"
    },
    {
        id: "3",
        title: "Crowd Funding",
        image: "https://www.shutterstock.com/image-vector/crowdfunding-isometric-landing-page-people-600nw-1991089115.jpg",
        desc: "Delivered CrowdFunding, a blockchain-based fund collection platform.Facilitates seamless interaction for both campaign creators and contributors. Crowd Funding stands as a testament to innovation in the realm of fundraising technology.",
        link: "https://github.com/lazyDeveloperAkash/Crowd_Funding"
    }
]

const Single = ({ project }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
    })
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
    return (
        <section className='flex items-center justify-center '>
            <div className='h-full w-full flex flex-col md:flex-row items-center gap-2 md:gap-10 max-w-[78vmax] overflow-hidden'>
                <div ref={ref} className='h-1/2 min-w-[50%]'><img className='object-contain md:object-cover h-full gap-4' src={project.image} alt="" /></div>
                <motion.div className='flex flex-col gap-2 md:gap-8 removeAnimation items-center max-w-[78vmax] text-center md:text-left' style={{ y }}>
                    <h2 className='text-[5vmax] md:text-[3vmax]'>{project.title}</h2>
                    <p className='text-sm md:text-base text-wrap'>{project.desc}</p>
                    <a href={project.link}>
                        <button className='border-none bg-orange-400 rounded-xl p-3 w-[200px]'>See Code</button>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

const Project = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div ref={ref} className='relative'>
            <div className='sticky top-0 left-0 pt-[calc(100vh-70px)] md:pt-12 text-center text-[5vmax] md:text-5xl text-orange-400'>
                <h1 className='mb-2 md:mb-4'>Featured Projects</h1>
                <motion.div style={{ scaleX: scaleX }} className='h-2 bg-white rounded-lg'></motion.div>
            </div>
            <div>{projects.map((project, i) => (
                <Single project={project} key={i} />
            ))}</div>
        </div>
    )
}

export default Project