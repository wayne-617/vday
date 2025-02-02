import React from 'react'
import { Gif } from './gif'

export const Yes = ({gifUrl, altText = "GIF"}) => {
  return (
    <div>
        <Gif gifUrl={gifUrl} altText={altText} />
    </div>
  )
}
