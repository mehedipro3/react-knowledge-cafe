import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";

const Blog = ({ blog ,handleAddToMark , handleMarkAsRead}) => {
  const { id,title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
  return (
    <div className='mb-20'>
      <img className='w-full mb-8' src={cover} alt={`image of the title : ${title}`} />
      <div className='flex justify-between'>
        <div className='flex mb-4'>
          <img className='w-14' src={author_img} />
          <div className='ml-6'>
            <h3 className='text'>{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} mins read</span>
          <button onClick={()=>handleAddToMark(blog)} className='ml-2 text-red-600 text-xl'><FaBookmark /></button>
        </div>
      </div>
      <h2 className="text-xl">{title}</h2>
      <p>
        {
          hashtags.map((hash, inx) => <span key={inx}> <a href="">#{hash}</a> </span>)
        }
      </p>
      <button 
      onClick={()=>handleMarkAsRead(id,reading_time)}
      className='text-purple-800 font-bold underline mt-2'>
        Mark As Read
        </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToMark : PropTypes.func.isRequired

}
export default Blog;