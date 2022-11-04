// useLayoutEffect

import React, { useLayoutEffect, useEffect, useState, useRef } from 'react'

export default function App() {
  const [show, setShow] = useState(false)
  const popup = useRef()
  const button = useRef()
  
  // with useEffect, the element is shown on the page and then the useEffect render it to the correct position, with useLayoutEffect this behavior doesn't happen
  useLayoutEffect(() => {
    if(popup.current == null || button.current == null) return
    const { bottom } = button.current.getBoundingClientRect()
    popup.current.style.top = `${bottom + 25}px`
  }, [show])

  return (
    <>
      <button ref={button} onClick={() => setShow(prev => !prev)}>
        Click here
      </button>
      {
        show && (
          <div style={{ position: 'absolute' }} ref={popup}>
            This is a popup
          </div>
        )
      }
    </>
  )
}