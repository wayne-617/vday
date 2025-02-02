import React from 'react'
import '../globals.css'
import { Gif } from './gif'

export const Message = ({onYes, onNo}) => {

    const mochaHeart = "https://media.tenor.com/cETqhEe3wmQAAAAj/mocha-bear-mocha.gif";

  return (
    <div className="text-center transform-style-preserve justify-center">
              
        <h1 className="main-text">Will you be my Valentine?</h1>
                
                

        <Gif gifUrl={mochaHeart} altText="Mocha Heart GIF" />

        <div className="flex justify-center gap-[50px] mt-8">
            <button className="bg-green-500 text-white font-bold py-4 px-10 text-xl rounded-full" onClick={onYes}>
                Yes
             </button>
            <button className="bg-red-500 text-white font-bold py-4 px-10 text-xl rounded-full" onClick={onNo}>
                No
            </button>
        </div>
    </div>
  )
}
