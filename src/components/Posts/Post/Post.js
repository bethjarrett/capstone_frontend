import React from 'react';
import { useDispatch } from 'react-redux';
import { likePost } from '../../../actions/posts';
import profile from "../../images/fakesquarefile.jpg"

import { FaThumbsUp } from 'react-icons/fa';

const Post = ({ post }) => {
const dispatch = useDispatch();

function DisplayImage(props) {
  return <img className="img-fluid" src={post.selectedFile} title={post.post} />;
}

function ImageFunction(props) {
  if (post.selectedFile) {
    return <DisplayImage />;
  } else return null };

return (
  <div className='card border-0 mt-3'>
  <hr />
    <div className='row g-0'>
      <div className='col-1 pb-2'><img src={profile} className="img-fluid img-thumbnail" alt="Thumbnail"/></div>
      <div className='col-11'>
        <div className='card-body'>
          <div className='card-text'>Beth Jarrett&nbsp;&nbsp;&nbsp;{post.post}</div>
          <div id="img">
            <ImageFunction />
            </div>
        </div>
      </div>
      <div className='card-footer border-0 p-3'>
        {post.comment}
      </div>
    </div>
    <button className='btn btn-outline-primary btn-sm mt-3 mb-3' onClick={() => dispatch(likePost(post._id))}><FaThumbsUp /> Like {post.likeCount}</button>
  </div>
  );
};

export default Post;