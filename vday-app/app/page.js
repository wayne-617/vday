'use client';

import { useState } from 'react';
import { Gif } from './components/Gif'
import { Yes } from './components/Yes'
import { Message } from './components/Message'
import DisplayBox from './components/DisplayBox';

export default function Home() {

  const mochaHeart = "https://media.tenor.com/cETqhEe3wmQAAAAj/mocha-bear-mocha.gif";
  const mochaHug = "https://media1.tenor.com/m/1gf_Jz8WYH0AAAAC/sami-en-dina-sami-dina.gif";
  const mochaSad = "https://media.tenor.com/mNO8aMW3GB8AAAAi/milk-and-mocha-mocha.gif/";
  const hearts = "https://media.tenor.com/tKCqj_okD1UAAAAi/transparent-hearts.gif"

  const[isYes, setYes] = useState(false);
  const[content, setContent] = useState(<Message onYes={handleYes} onNo={handleNo}/>);
  const [background, setBackground] = useState('');

  function handleYes() {
    setContent(<Gif gifUrl={mochaHug} altText='Yay' />);
    setBackground('url("https://media.tenor.com/tKCqj_okD1UAAAAi/transparent-hearts.gif")')
  }

  function handleNo() {
    setContent(<Gif gifUrl={mochaSad} altText='Dang' />);
  }

  const toggleYes = () => {
    setYes(!isYes);
  };



  return (
    <div 
      style={{
      background: background,
    }}
    >
      <main>
        <div className="flex-container">
          
          <div className="wrapper">
          {isYes && <Yes gifUrl={mochaHug} className="yes"/>}
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
        </div>
      </main>
    </div>
  );
}
