import { useState } from 'react'
import './ShowList.css'
import { useEffect } from 'react'
import axios from 'axios'
import noImage from '../assets/noImage.avif'
import { useNavigate } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner'
function ShowList() {
//   const [data,setData] = useState(JSON.parse(localStorage.getItem('data')) || [])
const [data, setData] = useState(() => JSON.parse(localStorage.getItem('data')) || []);
const [Loading,setLoading] = useState(true)
const navigate = useNavigate()
  useEffect(()=>{
   const fetchData = async()=>{
     const response = await axios.get('https://api.tvmaze.com/search/shows?q=all')
     console.log(response)
     setData(response.data)
     
     localStorage.setItem('data', JSON.stringify(response.data))
     
   }
   fetchData()
  },[])
  setTimeout(()=>{
    setLoading(false)
  },200)

  const handleImageClick = (item)=>{
    console.log(item)
    navigate(`/${item.show.id}/show`)
  }
  console.log('data',data)
  if(Loading){
    return (
      <div className="loader">

      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    )
  }
 return (
    <div className='container'>
        {
          data?.map((item,i)=>{
            return(
              <div key={i} onClick={()=>handleImageClick(item)}>
                <img src={item?.show?.image == null ? noImage : item?.show?.image?.original } alt="" />
                <h3>{item.show.name}</h3>
              </div>
            )
           })
        }
    </div>
  )
}

export default ShowList
