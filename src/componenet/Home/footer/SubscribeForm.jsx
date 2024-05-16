import React from 'react'

export const SubscribeForm = () => {
  return (
    <div className="md:col-span-2">
    <h6 >Subscribe</h6>
    <p className="text-small-gray">Get the latest updates from our team.</p>
    <div className="flex">
      <input
        type="email"
        placeholder="your@email.com"
        className="input"
      />
      <button className="bg-darkPink text-white px-4 py-2 mt-2 rounded font-medium">
        Subscribe
      </button>
    </div>
  </div>
  )
}
