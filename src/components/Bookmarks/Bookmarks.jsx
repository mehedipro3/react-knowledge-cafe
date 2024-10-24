import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
  return (
    <div className="md:w-1/3 bg-gray-500 ml-4 pt-2 mt-3 rounded-lg">
      <h2 className="text-2xl text-center text-white">Bookmark Blogs : {bookmarks.length}</h2>
      {
        bookmarks.map(bookmark=><Bookmark 
          key={bookmark.id} 
          bookmark={bookmark}
          ></Bookmark>)
      }
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;