import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([]) ;

  const [readingTime,setReadingTime] = useState(0);

  const handleAddToMark = blog =>{
    const newBookMarks =[...bookmarks, blog];
    setBookmarks(newBookMarks);
  }

  const handleMarkAsRead = (id, time) =>{
    const newReadingTime = readingTime + time ;
    setReadingTime(newReadingTime);
    // removing bookmark 
      const remainingBookmarks = bookmarks.filter(bookmark=>bookmark.id !== id);
      setBookmarks(remainingBookmarks);
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToMark={handleAddToMark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
      </div>
    </>
  )
}

export default App
