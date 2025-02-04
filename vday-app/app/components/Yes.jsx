import React, { useState } from 'react'
import { Gif } from './gif'

export const Yes = () => {

  const mochaHug = "https://media1.tenor.com/m/1gf_Jz8WYH0AAAAC/sami-en-dina-sami-dina.gif";
  const confetti = "https://cdn.pixabay.com/animation/2023/08/17/08/51/08-51-41-992_512.gif";

  /* const handleGifLoad = (event) => {
    const { naturalWidth, naturalHeight } = event.target;
    setGifSize({ width: naturalWidth, height: naturalHeight });
  }; */

  return (
    <div className='gif-container'>
        <h2 className='yes-text'>YAYYYYY!!!</h2>
        <Gif gifUrl={mochaHug} altText="hug" className="w-50" />
        <h2 className='yes-text'>LOVE YOU LOTS - WAYNE</h2>
    </div>
  )
}
