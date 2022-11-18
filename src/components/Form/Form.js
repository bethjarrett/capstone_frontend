import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ url: '', post: '', comment: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ url: '', post: '', comment: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <div className='input-group justify-content-center'>
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <h6>{currentId ? `Editing "${post.post}"` : 'Create a New Post'}</h6>
        <div className='form-group row form-floating mb-2'>
        <input name="post" className="form-control" value={postData.post} onChange={(e) => setPostData({ ...postData, post: e.target.value })} />
        <label htmlFor="post">post</label>
        </div><div className='form-group row form-floating mb-2'>
        <textarea name="comment" className="form-control" multiline={4} value={postData.comment} onChange={(e) => setPostData({ ...postData, comment: e.target.value })} />
        <label htmlFor="comment">comment</label>
        </div><div className='form-group row form-floating mb-2'>
        <input name="url" className="form-control" value={postData.url} onChange={(e) => setPostData({ ...postData, url: e.target.value })} />
        <label htmlFor="url">url</label>
        </div><div className='form-group row form-floating mb-2'>
        <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div><div className='form-group row form-floating mt-3 mb-2'>
        <button className="btn btn-success" type="submit">Submit</button>
        </div><div className='form-group row form-floating mb-2'>
        <button className="btn btn-secondary btn-sm" onClick={clear}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
