import React from 'react'
import { createRoot } from 'react-dom/client'
// import {jsx as _jsx} from 'react/jsx-runtime.js'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )
}

// const reactElement={
//     type: 'a',
//     props:{
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     children:'click me to visit google'
// }

const anotherElement=(
  <a href="https://www.google.com" target="_blank"> Visit Google </a>
)

 const anotherUser="chai aur react"
const reactElement= React.createElement(
  'a',
  {href:'https://www.google.com', target: '_blank'},
  'click me to visit google',
  anotherElement
)


createRoot(document.getElementById('root')).render(
  
    // <MyApp />
    // MyApp()
    // anotherElement
    reactElement,
    <App />
 
)
