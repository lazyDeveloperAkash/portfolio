import { motion } from 'framer-motion'
import Sidebar from '../Sidebar/Sidebar'
import FramerMagnetic from './FramerMagnetic';

const Navbar = () => {
    return (
        <div className='h-[100px] relative'>
            <Sidebar />
            <div className="max-w-[78vw] flex items-center justify-end md:justify-between h-full m-auto">
                <motion.span className='md:block hidden' initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} >PortFolio</motion.span>
                <div className="flex gap-5">
                    <FramerMagnetic>
                        <a href="https://www.facebook.com/akash.bhaumik.906"><img className='h-5' src="./facebook.png" alt="" /></a>
                    </FramerMagnetic>
                    <FramerMagnetic><a href="https://www.instagram.com/lazy_developer_akash/?hl=en"><img className='h-5' src="./instagram.png" alt="" /></a></FramerMagnetic>
                    <FramerMagnetic><a href="https://github.com/lazyDeveloperAkash"><img className='h-5' src="./github.png" alt="" /></a></FramerMagnetic>
                    <FramerMagnetic><a href="https://www.linkedin.com/in/akash-bhaumik/"><img className='h-[25px]' src="./linkdin.png" alt="" /></a></FramerMagnetic>
                </div>
            </div>

        </div>
    )
}

export default Navbar