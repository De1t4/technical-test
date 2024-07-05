'use client'
import React, { useState } from 'react'
import { InputForm } from './input'
import { Textarea } from './textarea'
import { Modal } from '@/components/modal'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import styles from '../styles.module.css';


export default function FormContact() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const [valid, setValid] = useState(false)

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value)
  }

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if (!emailRegex.test(value)) {
      // invalid email
      setValid(true)
    } else {
      setEmail(value)
      setValid(false)
    }

  }

  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    console.log(message)
    setMessage(value)
  }

  return (
    <form className=' flex flex-col gap-y-2' onSubmit={submitForm}>
      <InputForm name={"Name"} type={"text"} placeholder='Enter your name' handleInput={handleName} ></InputForm>
      <InputForm name={"Email"} type={"email"} placeholder='Enter your email' handleInput={handleEmail}></InputForm>
      <Textarea text={"Message"} placeholder={'Enter your message'} handleInput={handleMessage}></Textarea>
      <button onClick={() => setOpen(true)} disabled={name.length < 3 || email.length < 3 || valid || message.length < 10} className={styles.primary}>Send Message</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56">
          <IoMdCheckmarkCircleOutline className=' text-green-400  text-5xl m-auto bg-green-100 rounded-full p-2' />
          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-semibold text-gray-800">Email sent successfully</h3>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ratione amet.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              className="btn btn-light w-full border-2 font-semibold border-blue-700 py-1 rounded-md"
              onClick={() => setOpen(false)}
            >
              Accept
            </button>
          </div>
        </div>
      </Modal>
    </form>
  )
}
