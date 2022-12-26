import React from 'react'
import PersonalInfo from '../personalInfo/PersonalInfo.js';
import Contacts from '../contacts/Contacts.js';
import Experience from '../experience/Experience.js';
import './userCv.css'


export default function UserCv() {
  return (
        <>
    <header>
    <PersonalInfo/>
    
    </header>
    <div className='container'>
    <aside>
          
          <Contacts/>
     
           </aside>
           <main>
           <Experience/>
           </main>
    </div>

    </>
  )
}

