import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Bollywood from './Bollywood'
import Fitness from './Fitness'
import Food from './Food'
import Hollywood from './Hollywood'
import Home from './Home'
import Technology from './Technology'
import DataStore from './Store/DataStore'
import GenrikData from './GenrikData'

const Routesnav = () => {
  return (
    <div>
  
<DataStore>
       <Routes>
      <Route path="/" element={<Home/>}/>
<Route  />

<Route path="/Bollywood" element={<Bollywood/>}/>


<Route path="/Technology" element={<Technology/>}/>

<Route path='/Hollywood' element={<Hollywood/>}/>

<Route path='/Fitness' element={<Fitness/>}/>

<Route path='/Food' element={<Food/>}/>
<Route path='/Genrik/:id' element={<GenrikData/>} />

      </Routes> 
      </DataStore>


    </div>
  )
}

export default Routesnav
