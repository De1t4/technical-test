import React from 'react'

export default function Footer() {
  return (
    <footer className=' flex justify-around py-8 bg-blue-900 text-blue-50 '>
      <div className=''>
        <h3 className=' font-semibold border-b-2 mb-2'>Company</h3>
        <p className=' text-sm'>About Us</p>
        <p className=' text-sm'>Our Team</p>
        <p className=' text-sm'>Carrers</p>
        <p className=' text-sm'>News </p>
      </div>
      <div className=''>
        <h3 className=' font-semibold border-b-2 mb-2'>Legal</h3>
        <p className=' text-sm'>Privacy Policy</p>
        <p className=' text-sm'>Terms of Service</p>
        <p className=' text-sm'>Cookie Policy</p>
      </div>
      <div className=''>
        <h3 className='font-semibold border-b-2 mb-2'>Contact</h3>
        <p className=' text-sm'>Support</p>
        <p className=' text-sm'>Press</p>
        <p className=' text-sm'>Partnerships</p>
      </div>
    </footer>
  )
}
