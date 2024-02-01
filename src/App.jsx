
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Toaster} from 'react-hot-toast';
import ShowList from './pages/ShowList'
import Show from './components/Show'
import BookShow from './components/BookShow'




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<ShowList/>}/>
            <Route path='/:id/show' element={<Show/>}/>
            <Route path='/:id/show/book' element={<BookShow/>}/>
        </Routes>
      </BrowserRouter>
      <Toaster/>
    </div>
  )
}

export default App

