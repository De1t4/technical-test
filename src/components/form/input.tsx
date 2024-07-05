import React from 'react'
import styles from '../styles.module.css'

interface InputProps {
  name: string,
  type: string
  placeholder: string
  handleInput: (e:React.ChangeEvent<HTMLInputElement>)=> void
}

export const InputForm: React.FC<InputProps> = ({ name, type, placeholder,handleInput }) => {
  return (
    <span className='flex flex-col'>
      <label htmlFor={name} className=' font-medium'>{name}</label>
      <input minLength={3} onChange={handleInput} type={type} id={name} className={styles.input} placeholder={placeholder} />
    </span>
  )
}
