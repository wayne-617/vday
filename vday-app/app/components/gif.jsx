import React from 'react'

export const Gif = ({gifUrl, altText = "GIF"}) => {
  return (
    <div>
      <img src={gifUrl} alt={altText} className='gif'/>
    </div>
  )
}
