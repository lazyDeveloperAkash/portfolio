import React, { useEffect, useState } from 'react'

const AutoTypeText = ({speed}) => {
    const word = ["web developer", "student"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const currentWord = word[currentWordIndex];

    useEffect(() => {
      let charIndex = 0;
      const typingInterval = setInterval(()=>{
        if(charIndex <= currentWord.length){
            setCurrentText(currentWord.slice(0, charIndex));
            charIndex++;
        }else{
            clearInterval(typingInterval);

            setTimeout(() => {
                setCurrentWordIndex((preIndex)=> preIndex === word.length - 1 ? 0 : preIndex + 1);
            }, 1000);
        }
      },speed)
    
      return () => {
        clearInterval(typingInterval);
      }
    }, [currentWord, speed])
    
  return (
    <h1 className=' bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-500'>{ currentText || '\u00A0' }</h1>
  )
}

export default AutoTypeText