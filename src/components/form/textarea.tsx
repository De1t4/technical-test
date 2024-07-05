import React, { useState } from 'react'
import styles from '../styles.module.css'

interface TextareaProps {
  text: string,
  placeholder: string
  handleInput: (e:React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea: React.FC<TextareaProps> = ({ text, placeholder,handleInput}) => {

  

  return (
    <span className='flex flex-col '>
      <label htmlFor={text} className='font-medium'>{text}</label>
      <textarea minLength={10} name={text} onChange={handleInput} id={text} maxLength={255} className={styles.textarea} placeholder={placeholder}></textarea>
    </span>
  )
}
