
import {useState} from 'react'
import CompoRech from './components/CompoRech'

function App() {
  
  const salaries=[
    {nom:'sal1',service:{code:'cdcd',nom:'serv1'}},
    {nom:'sal1',service:{code:'cdcd',nom:'serv1'}},
    {nom:'sal2',service:{code:'cdcd',nom:'serv2'}},
    {nom:'sal2',service:{code:'cdcd',nom:'serv2'}},
    {nom:'sal1',service:{code:'cdcd',nom:'serv1'}},
    {nom:'sal1',service:{code:'cdcd',nom:'serv1'}}
  ]
 const [show,setShow]=useState(false)
  const[filterSal,setFilterSal]=useState([])
  
  const handleSearch=(term)=>{
    setFilterSal(salaries.filter(sal=>sal.service.nom.includes(term)))
    setShow(true)
  }
  return (
    <>
<h1>APP</h1>
<CompoRech rech={handleSearch}/>
<h1>resultats :</h1>
{show &&
  <ul>
  {filterSal.length>0?filterSal.map((sal,i)=><li key={i}>{sal.nom}</li>):<li>aucun salarie trouvé</li>}
</ul>}
    </>
  )
}

export default App
