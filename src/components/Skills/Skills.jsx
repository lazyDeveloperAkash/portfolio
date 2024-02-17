import React from 'react'
import SkillText from './SkillText'
import { Backend_skill, Frontend_skill, frameworks, java } from './Contant'
import SkillDataProvider from './SkillDataProvider'

const Skills = () => {
  return (
    <div className='h-full f-full flex flex-col items-center justify-center gap-3 overflow-hidden'>
        <SkillText/>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Frontend_skill.map((image,index)=>(
                <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index}/>
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {Backend_skill.map((image,index)=>(
                <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index}/>
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
            {frameworks.map((image,index)=>(
                <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index}/>
            ))}
        </div>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        <SkillDataProvider key={java.index} src={java.Image} width={java.width} height={java.height} index={1}/>
        </div>
        <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover bg-[#06040f]'>
                <video className='w-full h-full' preload='false' playsInline loop muted autoPlay src="./cards-video.webm"/>
            </div>
    </div>
  )
}

export default Skills