'use client'
import React from 'react'
import { FaUser } from "react-icons/fa";
import styles from '@/components/styles.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#">
        <div className='flex items-center gap-2'>
          <FaUser className=' border-2 text-gray-900 border-black w-8 h-8 p-1 rounded-full bg-slate-200'></FaUser>
          <span className=' text-xs'>
            <p>John Doe</p>
            <p>@JonhDoe</p>
          </span>
        </div>
      </a>
      <div className='flex justify-center gap-6 max-md:gap-2'>
        <p className={` max-md:hidden ${styles.title}`}>Home</p>
        <a href="#about">
          <p className={styles.title}>About</p>
        </a>
        <a href="#navbar">
          <p className={styles.title}>Contact</p>
        </a>
        <a href="#interests">
          <p className={styles.title}>Interests</p>
        </a>
      </div>
    </nav>
  )
}
