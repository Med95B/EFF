/* eslint-disable react/prop-types */
import { useState } from "react"

function CompoRech({rech}) {

    const [term,setTerm]=useState('')
const recherche=(e)=>{
    e.preventDefault()
    rech(term)
}

  return (
    <div>
        <form onSubmit={recherche}>
  <input type="text" value={term} onChange={e=>setTerm(e.target.value)}/>
  <button type='submit'>rech</button>
</form>
    </div>
  )
}

export default CompoRech