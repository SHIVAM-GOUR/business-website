'use client'

import React from 'react'


const Whatsapp = () => {


  const handleClick = async () => {

    // Check if WhatApp installed, if yes open whatsapp else open whatsapp web

    if (navigator.userAgent.includes('WhatsApp')) {
      // WhatsApp is installed
      window.open(`whatsapp://send?phone=7566687880`)
    } else {
      // WhatsApp is not installed, open WhatsApp Web
      window.open('https://web.whatsapp.com/send?phone=7566687880', '_blank');
    }
  }

  return (
    <>
      <div className="inline-block rounded-sm bg-lime-600 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-lime-500 dark:bg-white/10 dark:text-white dark:hover:bg-white/5 cursor-pointer" onClick={handleClick}>
       Connect on WhatsApp
      </div>
    </> 
  )
}

export default Whatsapp