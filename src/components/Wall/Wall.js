import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import "../../components/bootstrap/css/bootstrap.min.css"
import profile from "../../components/images/fakeprofile.jpg"
import { FaCommentDots, FaAddressCard, FaImages, FaStickyNote, FaGraduationCap, FaHome, FaRegCalendarAlt, FaBriefcase } from 'react-icons/fa';

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
<div className="modal in" id="modalCenter" tabIndex="-1" role="dialog" aria-labelledby="modalCenter" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">About Scrapebook</h5>
      </div>
      <div className="modal-body">
        <p>In October 2005, I used my university email address to open a Facebook account. I documented my life on it: job woes, international moves, dirty laundry, and too much information peppered between blurry phone pictures and Farmville invitations.</p>
        <p>I quit social media in 2019, and have been thinking about my relationship with this <em>account</em> ever since. So I scraped it. I took all my old posts, culled them down, and reflected on it all.</p>
        <p>Forget yearbook. <h5>Welcome to my decadebook.</h5></p>
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
                <td>&nbsp;<FaCommentDots />&nbsp;&nbsp;<a href="/"><button type="button" className="btn btn-link">Wall</button></a></td>
              </tr>
              <tr>
                <td>&nbsp;<FaAddressCard />&nbsp;&nbsp;<button type="button" className="btn btn-link" data-toggle="modal" data-target="#modalCenter">Info</button></td>
              </tr>
              <tr>
                <td>&nbsp;<FaImages />&nbsp;&nbsp;Photos</td>
              </tr>
              <tr>
                <td>&nbsp;<FaStickyNote />&nbsp;&nbsp;<a href="/quiz"><button type="button" className="btn btn-link">Notes</button></a></td>
              </tr>
            </tbody>
            <tfoot><tr></tr></tfoot>
          </table>
        </div>
      </div>
      <div className='col-sm-8'>
        <div className='container pt-5'>
          <h1>Beth Jarrett</h1>
          <span><FaGraduationCap />&nbsp;&nbsp;Studied at York University&nbsp;&nbsp;<FaBriefcase />&nbsp;&nbsp;Worked jobs&nbsp;&nbsp;<FaHome />&nbsp;&nbsp;From and Lives in Toronto, Ontario&nbsp;&nbsp;<FaRegCalendarAlt />&nbsp;&nbsp;Born before the Internet</span>
          <Posts setCurrentId={setCurrentId} />
        </div>
      </div>
    </div> 
  </div>
</div>
  );
};

export default Wall;