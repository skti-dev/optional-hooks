// 01 - useLayoutEffect
// Just like useEffect, but useLayoutEffect runs syncronously between one react calculate through DOM and when it actually prints it.
// Perfect when we need to use something about the layout of the page. Always try to use useEffect first

// import React, { useState, useLayoutEffect } from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   useLayoutEffect(() => {
//     console.log(count)
//   }, [count])

//   return (
//     <>
//       <button onClick={() => setCount(c => c + 1)}> Increment </button>
//       <div>{count}</div>
//     </>
//   )
// }

// export default App

// 02 - useDebugValue
// import { useState, useDebugValue } from 'react'
// // import { useLocalStorage } from './useLocalStorage'

// export default function App() {
//   // const [firstName, setFirstName] = useLocalStorage('firstName', 'Augusto')
//   const [lastName, setLastName] = useState('Seabra')

//   // helpful hook for debuging, it shows the information passed as parameter near to its hook  
//   // it only works on customHooks
//   // useDebugValue(firstName)
  
//   // to logout multiple values (just use it again):
//   // useDebugValue(lastName)
//   // or
//   // useDebugValue([firstName, lastName])
//   // and you can even
//   // useDebugValue('Hi')
//   // useDebugValue({ object })
//   // returns: ['Hi', { ... }]

//   // for performance:
//   // useDebugValue(getValueSlowly(value)) //slow
//   // useDebugValue(value, v => getValueSlowly(v)) // only runs if its in development and with the inspector open

//   return(
//     <>
//       First:{" "}
//       <input value={firstName} onChange={e => setFirstName(e.target.value)} />
//       <br />
//       Last:{" "}
//       <input value={lastName} onChange={e => setLastName(e.target.value)} />
//     </>
//   )

// }

// function getValueSlowly(value) {
//   for(let i = 0; i < 300000; i++) {}
//   return value
// }

// 03 - useImperativeHandle
// import { useRef, useState } from 'react'
// import CustomInput from './CustomInput'

// export default function App() {
//   const [value, setValue] = useState('red')
//   const inputRef = useRef()

//   return (
//     <>
//       {/* <input 
//         ref={inputRef}
//         value={value}
//         onChange={e => setValue(e.target.value)}
//       /> */}
//       <CustomInput 
//         ref={inputRef}
//         value={value}
//         onChange={e => setValue(e.target.value)}
//       />
//       <br />
//       {/* <button onClick={() => inputRef.current.focus()}>Focus</button> */}
//       <button onClick={() => inputRef.current.alertHi()}>Focus</button>
//     </>
//   )
// }

// 04 - useId
import EmailForm from "./EmailForm"

export default function App() {
  return (
    <>
      <EmailForm />
        <article style={{ marginBlock: '1rem' }}>
          Nisi ullamco esse do commodo. Elit ipsum magna non eu adipisicing aute ipsum do laboris cillum duis elit culpa. Magna qui culpa ea minim pariatur. Excepteur adipisicing sit irure ad voluptate labore in consectetur commodo commodo culpa tempor nostrud. Consequat nulla velit occaecat id incididunt. Culpa sunt aute aliquip elit in. Dolore in Lorem laborum velit.
        </article>
      <EmailForm />
    </>
  )
}
