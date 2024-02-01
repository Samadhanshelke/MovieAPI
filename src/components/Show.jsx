import { useNavigate, useParams } from "react-router-dom"
import './Show.css'
import noImage from '../assets/noImage.avif'

function Show() {
    const {id} = useParams();
   const navigate = useNavigate()
    console.log(id)
    const data = JSON.parse(localStorage.getItem('data'))
    const item = data.filter((dt)=>{
        return dt.show.id == id
    })

 
      return(
        <div className="container_div">
              <div className="left_div">
              <img src={item[0]?.show?.image == null ? noImage : item[0]?.show?.image?.original } alt="" />
              <button className="book_btn" onClick={()=>navigate(`/${id}/show/book`)}>Book Movie Ticket</button>
              </div>
              <div className="right_div">
                  <h1>{item[0].show.name}</h1>
                <span>{item[0].show.summary}</span>
                <span>Rating: {item[0].show.rating.average}</span>
                <span>Language: {item[0].show.language}</span>
                <span>
                      Genres: {item[0].show.genres.map((x, index) => (
                        <span key={index}>
                          {x}
                          {index < item[0].show.genres.length - 1 ? "," : ""}
                        </span>
                      ))}
                </span>
                <span>
                Premiered : {item[0].show.premiered}  || {""} Ended :  {item[0].show.ended === null ? 'N/A':item[0].show.ended}
                </span>
              </div>
              </div>
      )
    
    
                    
}

export default Show