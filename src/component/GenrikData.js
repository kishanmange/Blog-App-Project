import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import User from './Store/Mask.png'
import Social from "./Store/Social.jpg"
import { Store } from './Store/DataStore'
import Morefromgen from './Moreforgen/Morefromgen'
import { Link } from 'react-router-dom'




const GenrikData = () => {

  const [genrikdata] = useContext(Store);
  const filter = genrikdata.filter((item)=>item.cat==="Genrik")

    const navigate = useNavigate();
    const Location = useLocation().state;
    console.log(Location)
  return (
    <div className='genmain'>

      
       <div className='mainuser5'>
       <h1>{Location.titel}</h1>
        {/* <div className='usdetails'>
          <img src={User} alt=" user photo" className='usicon' />
          <h3 className='usname'>Maahir bhanushali</h3>
          <p className='dwd'>17 05 2050</p>
          <img src={Social} alt=" user photo" className='social' />

        </div> */}
        <div className='usdetails7'>
          <img src={User} alt=" user photo"  />
          <h3 className='usname7' >Maahir bhanushali</h3>
          {/* <p >17 05 2050</p> */}
          <img src={Social} alt=" user photo"  className='social7' />

        </div>
      <img src={Location.urlforimage}  alt="selected data" className='genim' />
       </div>
      <h2 className='k56'>{Location.content}</h2>
      <p className='k566'>{Location.discription}</p>
      <button onClick={()=>navigate(-1)} className='bboton'>go back</button>
      <div  className='mm'>
      <h2>More from The Siren</h2>
      <hr />
      </div>
    
      <div className="more">
        <Morefromgen/>
      {/* {
        filter.map((value,index)=>{
          console.log(value);
          return(
            <img src={value.urlforimage} alt="" />
          )
        })
      } */}
      </div>

    </div>
  )
}

export default GenrikData
