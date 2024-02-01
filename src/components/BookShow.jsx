import { useNavigate, useParams } from "react-router-dom";
import './BookShow.css'
import toast from "react-hot-toast";
function BookShow() {
  const {id} = useParams();
  const navigate = useNavigate()
  const data = JSON.parse(localStorage.getItem('data'))
    const item = data.filter((dt)=>{
        return dt.show.id == id
    })[0]

    const handleBuyTicket = (e)=>{
       e.preventDefault();
       toast.success("Ticket Booked Successfully!")
       navigate(`/${id}/show`)

    }
  return (
    <form className="book_show_form">
     <div className="box">
            <div>
                <label htmlFor="name">Movie Name: </label>
                <input type="text" id="name" value={item.show.name}/>
            </div>
            <div>
              <label htmlFor="language">Language</label>
              <input type="text" id="language" value={item.show.language}/>
            </div>
            <div>
              <label htmlFor="runtime">Runtime</label>
              <input type="text" id="runtime" value={item.show.runtime === null ?item.show.averageRuntime + " minutes":item.show.runtime + " minutes"}/>
            </div>
            <button type="submit" onClick={handleBuyTicket}>Buy Now</button>
     </div>
       
     
    </form>
  )
}

export default BookShow