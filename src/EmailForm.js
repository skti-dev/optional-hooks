import { useId } from 'react'

export default function EmailForm() {
  const id = useId()
  // const id2 = useId() // it works but its better if we call useId just once

  return (
    <>
      <label htmlFor={`${id}-email`}>Email</label>
      <input id={`${id}-email`} type="email" />
      <br />
      {/* <label htmlFor={id2}>Name</label>
      <input id={id2} type="text" /> */}
      <label htmlFor={`${id}-name`}>Name</label>
      <input id={`${id}-name`} type="text" />
    </>
  )
}