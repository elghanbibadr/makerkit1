import React from 'react'
import { PurpleButton } from '../../../ui/PurpleButton'

export const SubscribeForm = () => {
  return (
    <div className="md:col-span-2">
    <h6 >Subscribe</h6>
    <p className="text-small-gray">Get the latest updates from our team.</p>
    <form className="flex gap-2">
      <input
        type="email"
        placeholder="your@email.com"
        className="input  h-10 "
        required
      />
   
      <PurpleButton  text="subscribe" className="relative bottom-[3px]"/>
    </form>
  </div>
  )
}
