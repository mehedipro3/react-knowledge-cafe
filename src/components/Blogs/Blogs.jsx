import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToMark ,handleMarkAsRead}) => {
  const [blogs,setBlogs] = useState([]);
  useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data))
  },[])
  return (
    <div className="md:w-2/3">
      <h2 className="font-bold text-2xl">Blogs:{blogs.length}</h2>
      {
        blogs.map(blog=><Blog
          handleMarkAsRead={handleMarkAsRead}
          handleAddToMark={handleAddToMark}
          key={blog.id} 
          blog={blog}
          ></Blog>)
      }
    </div>
  );
};
Blogs.propTypes = {
  handleAddToMark : PropTypes.func.isRequired,
  handleMarkAsRead : PropTypes.func.isRequired

}
export default Blogs;