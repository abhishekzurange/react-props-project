import { useState } from 'react'
import Nav from './components/Nav'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4.jsx';
import Section5 from './components/Section5.jsx';
import Footer from './components/Footer.jsx';

function App() {
 
  const nav =[ 
    {
   gamepad:"GamePad",
   home:'home',
   about:'about',
   product:'our product',
   video:'video game',
   service:'our services',
   contact:'contact us',
   sign:'sign in',
   register:'register',
   viga:'Video games ',
   control:'controller',
      p1:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable',
      img:'images/img-1.png',
      btn:'shop now'
  }]
  const section =[
    {
      img:'images/img-2.png',
      about:'About',
      p:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable',
      btn:'shop now'
    }
  ]

  const section2 =[
    {
      our:'Our ',
      products:'products',
      p:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem',
      img:'images/img-3.png',
      price:'Price $ ',
      video:'Video Game',
      price1:' 300',
      price2:'200',
      btn2:'see more'
    },
  
  ]

  const section3=[
    {
      d3:'3d video game',
      remote:'remoto control',
      p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
      btn:'Shop Now',
      img:'images/img-4.png'
    }
  ]

  const section4=[
    {
     test:'Testimonial',
     p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
     p1:'dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum',
     sandy:'Sandy Delex',
     rep:'Reprehenderit',
     img:'images/img-5.png',
     btn:'see more'
    }
  ]

  const section5=[
    {
      name:'Name',
      email:'Email',
      no:'Phone Number',
      message:'Message',
      btn:'Send',
      img:'images/img-6.png'
    }
  ]

  const footer=[
    {
      ab:'About Us',
      p2:'dolor sit amet, consectetur magna aliqua. Ut enim ad minim veniam, quisdotempor incididunt r',
      use:'Useful Link',
      vid:'Video games',
      re:'Remote control',
      td:'3d controller',
      us:'Contact Us',
      news:'Newsletter',
      place:'Enter your email',
      btn1:'suscribe',
    }
  ]


  return (
    <>
     <Nav nav1={nav} />
     <Section1 section1 ={section}/>
     <Section2 sec1 ={section2}/>
     <Section3 sec4={section3}/>
     <Section4 section04 ={section4}/>
     <Section5 sec5={section5}/>
     <Footer ft={footer}/>
    </>
  )
}

export default App
