'use client';

import { useState } from 'react';
import { Gif } from './components/Gif'
import { Yes } from './components/Yes'

export default function Home() {

  const mochaHeart = "https://media.tenor.com/cETqhEe3wmQAAAAj/mocha-bear-mocha.gif";
  const mochaHug = "https://media1.tenor.com/m/1gf_Jz8WYH0AAAAC/sami-en-dina-sami-dina.gif";

  const[isYes, setYes] = useState(false);

  const toggleYes = () => {
    setYes(!isYes);
  };

  return (
    <div >
      <main>
        <div className="flex-container">
          
          <div className="wrapper">
          {isYes && <Yes gifUrl={mochaHug} className="yes"/>}
            <div className="lid one"></div>
            <div className="lid two"></div>
            <div className="envelope"></div>
              
              <div className="text-center content transform-style-preserve">
              
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
              </div>
          
          </div>
        </div>
      </main>
    </div>
  );
}
