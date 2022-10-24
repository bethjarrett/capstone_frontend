import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import "../../components/bootstrap/css/bootstrap.min.css"
import profile from "../../components/images/fakeprofile.jpg"
import { FaCommentDots, FaAddressCard, FaImages, FaStickyNote } from 'react-icons/fa';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';

const Wall = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

return (
<div className="page">
<div className="modal fade" id="modalCenter" tabIndex="-1" role="dialog" aria-labelledby="modalCenter" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">About Scrapebook</h5>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <div className="pt-5"></div>
        <div className="table-responsive">
          <table className="table table-sm table-hover">
            <thead>
              <tr>
                <td><img className="img-fluid profile pb-5" src={profile} alt="This is a photograph of the developer."/></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>&nbsp;<FaCommentDots />&nbsp;&nbsp;<a href="/" className="btn btn-link">Wall</a></td>
              </tr>
              <tr>
                <td>&nbsp;<FaAddressCard />&nbsp;&nbsp;<button type="button" className="btn btn-link" data-toggle="modal" data-target="#modalCenter">Info</button></td>
              </tr>
              <tr>
                <td>&nbsp;<FaImages />&nbsp;&nbsp;Photos</td>
              </tr>
              <tr>
                <td>&nbsp;<FaStickyNote />&nbsp;&nbsp;<a href="/quiz" className="btn btn-link">Notes</a></td>
              </tr>
            </tbody>
            <tfoot><tr></tr></tfoot>
          </table>
        </div>
      </div>
      <div className='col-sm-8'>
        <div className='container pt-5'>
          <h1>Beth Jarrett</h1>
          <span>BLURBS!</span>
          <Posts setCurrentId={setCurrentId} />
        </div>
      </div>
    </div> 
  </div>
</div>
  );
};

export default Wall;