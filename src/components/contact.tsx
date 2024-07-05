import React from 'react'
import FormContact from './form/formContact'

export default function Contact() {
  return (
    <section id='navbar' className='animate-fadeIn'>
      <h1 className=' text-2xl font-semibold'>Contact Me</h1>
      <p className='mb-2'>Feel free to reach out to me with any questions or just to say hello!</p>
      <FormContact></FormContact>
    </section>
  )
}
