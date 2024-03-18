import React from 'react'
import NavBar from './Navbar'
import { Banner } from './Banner'
import Skill from './Skill'
import { Projects } from './Project'
import { Contact } from './Contact'
import { Footer } from './Footer'

export default function Main() {
  return (
    <div>
      <Banner/>
      <Skill/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}
