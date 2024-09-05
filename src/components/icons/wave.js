import "./wave.css"
import React from 'react';

const Wave = () => {
    return (
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
          <defs><linearGradient id="gradient" x1="0%" y1="51%" x2="100%" y2="49%"><stop offset="5%" stop-color="#283c5c"></stop><stop offset="95%" stop-color="#182c4c"></stop></linearGradient></defs><path d="M 0,400 L 0,250 C 133.5,277.125 267,304.25 380,275 C 493,245.75 585.5,160.125 692,138 C 798.5,115.87499999999999 919,157.25 1046,149 C 1173,140.75 1306.5,82.875 1440,25 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0"></path>
          <defs><linearGradient id="gradient" x1="0%" y1="51%" x2="100%" y2="49%"><stop offset="5%" stop-color="#283c5c"></stop><stop offset="95%" stop-color="#182c4c"></stop></linearGradient></defs>
          <path d="M 0,400 L 0,383 C 133.71428571428572,377.9107142857143 267.42857142857144,372.82142857142856 375,369 C 482.57142857142856,365.17857142857144 564,362.62500000000006 667,338 C 770,313.37499999999994 894.5714285714287,266.6785714285714 1027,233 C 1159.4285714285713,199.3214285714286 1299.7142857142858,178.6607142857143 1440,158 L 1440,400 L 0,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1"></path>
        </svg>
    )
}

export default Wave;