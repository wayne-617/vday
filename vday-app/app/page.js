'use client';

import { useState, useEffect } from 'react';
import { Gif } from './components/Gif'
import { Yes } from './components/Yes'
import { Message } from './components/Message'
import DisplayBox from './components/DisplayBox';

export default function Home() {

  const mochaHeart = "https://media.tenor.com/cETqhEe3wmQAAAAj/mocha-bear-mocha.gif";
  const mochaHug = "https://media1.tenor.com/m/1gf_Jz8WYH0AAAAC/sami-en-dina-sami-dina.gif";
  const mochaSad = "https://media.tenor.com/mNO8aMW3GB8AAAAi/milk-and-mocha-mocha.gif/";
  const hearts = "https://media.tenor.com/tKCqj_okD1UAAAAi/transparent-hearts.gif"
  const confettiGif = "https://media.tenor.com/nVsVEfzCGQMAAAAi/confetti.gif";
   /* "https://cdn.pixabay.com/animation/2023/08/17/08/51/08-51-41-992_512.gif"; */
  

  const[isYes, setYes] = useState(false);
  const[content, setContent] = useState(<Message onYes={handleYes} onNo={handleNo}/>);
  const [background, setBackground] = useState('');
  const [confetti, setConfetti] = useState(false);
  

  function handleYes() {
    /* setContent(<Gif gifUrl={mochaHug} altText='Yay' />); */
    setContent(<Yes />);
    setBackground('url("https://media.tenor.com/tKCqj_okD1UAAAAi/transparent-hearts.gif")');
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 5000)
  }

  function handleNo() {
    setContent(<Gif gifUrl={mochaSad} altText='Dang' />);
  }

  const toggleYes = () => {
    setYes(!isYes);
  };

  const handleMouseLeave = () => {
      document.body.style.pointerEvents = 'none';
      setConfetti(false)
      setTimeout(() => {
      setBackground('#ffe8e8'); // Change back after delay
      setContent(<Message onYes={handleYes} onNo={handleNo}/>);
      document.body.style.pointerEvents = 'auto';
      
    }, 1000);
  };

  useEffect(() => {
    document.body.style.transition = 'background 1s ease-in-out'; // Smooth transition
  }, [background]);



  return (
    <div 
      style={{
      background: background,
      }}
    >
      <main>

        <div className="flex-container" >
          <div className='flex absolute justify-center'>
            <h1 className='main-text'>⬇ OPEN HERE ⬇</h1>
            
          </div>

          
        
          <div className="wrapper" onMouseLeave={handleMouseLeave}>
          
{/*           {isYes && <Yes gifUrl={mochaHug} className="yes"/>} */}
            
            <div className="lid one"></div>
            <div className="lid two"></div>
            <div className="envelope"></div>
            
              <div className="text-center content transform-style-preserve">
 
                
              
                <DisplayBox content={content}/>
                
              
                {/*
                <h1 className="main-text">Will you be my Valentine?</h1>

                <Gif gifUrl={mochaHeart} altText="Mocha Heart GIF"/>

                <div className="flex justify-center gap-[50px] mt-4">
                  <button className="bg-green-500 text-white font-bold py-4 px-10 text-xl rounded-full" onClick={toggleYes}>
                    Yes
                  </button>
                  <button className="bg-red-500 text-white font-bold py-4 px-10 text-xl rounded-full">
                    No
                  </button>
                </div>
                */}

              </div>
          
          </div>

          <div className='flex absolute justify-center pt-10'>
            {confetti && <Gif gifUrl={confettiGif} altText='confetti' className="absolute confettiGif z-50"/>}
            
          </div>
        </div>

        
      </main>
    </div>
  );
}
