import React, { useEffect, useRef } from 'react'
import '../globals.css'
import { Gif } from './gif'

export const Message = ({onYes, onNo}) => {

    const mochaHeart = "https://media.tenor.com/cETqhEe3wmQAAAAj/mocha-bear-mocha.gif";

    const noButtonRef = useRef(null); // Ref to the "No" button
    const textCenterRef = useRef(null); // Ref to the container div

    useEffect(() => {
      const noButton = noButtonRef.current;
      const textCenterDiv = textCenterRef.current;
  
      const handleMouseMove = (event) => {
        if (!noButton || !textCenterDiv) return;
  
        // Get mouse position
        const mouseX = event.clientX;
        const mouseY = event.clientY;
  
        // Get the text-center div's position and size
        const containerRect = textCenterDiv.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();
  
        // Get the center of the button
        const buttonX = buttonRect.left + buttonRect.width / 2;
        const buttonY = buttonRect.top + buttonRect.height / 2;
  
        // Calculate the distance between the mouse and the button center
        const distance = Math.sqrt((mouseX - buttonX) ** 2 + (mouseY - buttonY) ** 2);
  
        // If the mouse is too close, move the button
        if (distance < 100) {
          // Calculate a new position within the text-center div's bounds
          const newX = Math.random() * (containerRect.width - buttonRect.width);
          const newY = Math.random() * (containerRect.height - buttonRect.height);

  
          // Ensure the button stays within the div bounds
          noButton.style.position = 'absolute';
          noButton.style.left = `${Math.max(0, Math.min(newX, containerRect.width - buttonRect.width))}px`;
          noButton.style.top = `${Math.max(0, Math.min(newY, containerRect.height - buttonRect.height))}px`;
        }
      };
  
      // Add mousemove event listener
      document.addEventListener('mousemove', handleMouseMove);
  
      // Cleanup event listener on unmount
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);

    /* useEffect(() => {
        const noButton = noButtonRef.current;

        const handleMouseMove = (event) => {
            if (!noButton) return;

            // Get mouse position
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // Get button position and size
            const buttonRect = noButton.getBoundingClientRect();
            const buttonX = buttonRect.left + buttonRect.width / 2;
            const buttonY = buttonRect.top + buttonRect.height / 2;

            // Calculate distance between mouse and button center
            const distance = Math.sqrt((mouseX - buttonX) ** 2 + (mouseY - buttonY) ** 2);

            // If the mouse is too close, move the button
            if (distance < 100) {
                const newX = Math.random() * (window.innerWidth - buttonRect.width);
                const newY = Math.random() * (window.innerHeight - buttonRect.height);

                // Ensure the button stays within the window bounds
                noButton.style.position = 'absolute';
                noButton.style.left = `${Math.max(0, Math.min(newX, window.innerWidth - buttonRect.width))}px`;
                noButton.style.top = `${Math.max(0, Math.min(newY, window.innerHeight - buttonRect.height))}px`;
            }
        };

        // Add mousemove event listener
        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup event listener on unmount
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); */

  return (
    <div  className="text-center transform-style-preserve justify-center">
              
        <h1 className="main-text">Will you be my Valentine?</h1>
                
                

        <Gif gifUrl={mochaHeart} altText="Mocha Heart GIF" />

        <div ref={textCenterRef} className="flex justify-center gap-[50px] mt-8 relative">
            <button className="bg-green-500 text-white font-bold py-4 px-10 text-xl rounded-full" onClick={onYes}>
                Yes
             </button>
            <button ref={noButtonRef} className="bg-red-500 text-white font-bold py-4 px-10 text-xl rounded-full" onClick={onNo}>
                No
            </button>
        </div>
    </div>
  )
}
