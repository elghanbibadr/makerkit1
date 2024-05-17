import React from 'react'
import Logo from '../../../ui/Logo'

export const LogoAndCopyright = () => {
  return (
    <div className="md:col-span-2">
   <Logo />
    <p className="text-small-gray mt-3">Add a short tagline</p>
    <span className="text-xs text-gray-400 leading-6 mt-4 inline-block ">© Copyright 2023 Awesomely.<br className="hidden md:block"/> All Rights Reserved.</span>
  </div>
  )
}
