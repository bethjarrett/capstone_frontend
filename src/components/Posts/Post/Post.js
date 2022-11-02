import React from 'react';
import { useDispatch } from 'react-redux';
import { likePost } from '../../../actions/posts';
import profile from "../../images/fakesquarefile.jpg"

import { FaThumbsUp, FaCalendarDay } from 'react-icons/fa';

const Post = ({ post }) => {
const dispatch = useDispatch();

function DisplayImage(props) {
  return <img className="img-fluid" src={post.selectedFile} alt={post.post} />;
}

function ImageFunction(props) {
  if (post.selectedFile) {
    return <DisplayImage />;
  } else return null };

function URLFunction(props) {
  if (post.url) {
    return <a href={post.url}>{post.url}</a>;
  } else return null };

return (
<div className='card border-0 mt-3'>
  <div className='card-header text-end'>
    <FaCalendarDay />&nbsp;&nbsp;{new Date(post.timestamp * 1000).toDateString()}
  </div>
  <div className='row g-0 pb-2 pt-2'>
    <div className='col-1'>
      <img src={profile} className="img-fluid img-thumbnail" alt="Thumbnail"/>
    </div>
    <div className='col-11'>
      <div className='card-body'>
        <div className='card-text'>
          <p><strong>Beth Jarrett</strong>&nbsp;&nbsp;&nbsp;{post.post}</p>
        </div>
        <div>
          <ImageFunction />
          <URLFunction />
        </div>
      </div>
    </div>
    <div className='card-footer border-0 p-3'>
      {post.comment}
    </div>
  </div>
  <div className='row'>
    <div className='col-4'></div>
    <div className='col-8 text-end'>
      <button className='btn btn-outline-primary btn-sm mt-3 mb-3' onClick={() => dispatch(likePost(post._id))}><FaThumbsUp /> Like {post.likeCount}</button>
    </div>
  </div>
</div>
  );
};

export default Post;