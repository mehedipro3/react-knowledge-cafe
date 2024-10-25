import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks ,readingTime}) => {
  return (
    <div className="md:w-1/3 ">
      <div className='bg-gray-500 ml-4 pt-2 pb-2 mt-3 rounded-lg text-center'>
        <h3 className="text-2xl text-white font-bold">Spent time on read : {readingTime}</h3>
      </div>
      <div className='bg-gray-500 ml-4 pt-2 mt-3 pb-4 rounded-lg'>
      <h2 className="text-2xl text-center text-white">Bookmark Blogs : {bookmarks.length}</h2>
      {
        bookmarks.map((bookmark,inx)=><Bookmark 
          key={inx} 
          bookmark={bookmark}
          ></Bookmark>)
      }
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;