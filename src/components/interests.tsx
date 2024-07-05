import React from 'react'
import { FaBook, FaCode, FaCamera } from "react-icons/fa";
import { MdOutlineDirectionsBike, MdOutlineSportsSoccer } from "react-icons/md";
import styles from '@/components/styles.module.css'

export default function Interests() {
  return (
    <section className='animate-fadeIn' id='interests'>
      <h2 className=' text-2xl font-semibold  mb-2'>Interests</h2>
      <div className=" flex gap-4 flex-wrap">
        <span className={styles.interests}>
          <p>Coding</p>
          <FaCode className=' text-slate-900'></FaCode>
        </span>
        <span className={styles.interests}>
          <p>Reading</p>
          <FaBook className=' text-slate-900'></FaBook>
        </span>
        <span className={styles.interests}>
          <p>Cycling</p>
          <MdOutlineDirectionsBike className=' text-slate-900'></MdOutlineDirectionsBike>
        </span>
        <span className={styles.interests}>
          <p>Photography</p>
          <FaCamera className=' text-slate-900'></FaCamera>
        </span>
        <span className={styles.interests}>
          <p >Football</p>
          <MdOutlineSportsSoccer className=' text-slate-900'></MdOutlineSportsSoccer>
        </span>
      </div>
    </section>
  )
}
