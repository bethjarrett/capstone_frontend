import React from 'react'
import { FaCommentDots, FaAddressCard, FaImages, FaRegCalendarAlt } from 'react-icons/fa';
import profile from "../../components/images/fakeprofile.jpg"

const Panel = () => {
  return (
<div className="col-sm-4">
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
          <td>&nbsp;<FaCommentDots />&nbsp;&nbsp;<a href="/wall"><button type="button" className="btn btn-link">Wall</button></a></td>
        </tr>
        <tr>
          <td>&nbsp;<FaAddressCard />&nbsp;&nbsp;<button type="button" className="btn btn-link" data-toggle="modal" data-target="#modalCenter">Info</button></td>
        </tr>
        <tr>
          <td>&nbsp;<FaImages />&nbsp;&nbsp;<a href="/photos"><button type="button" className="btn btn-link">Photos</button></a></td>
        </tr>
        <tr>
          <td>&nbsp;<FaRegCalendarAlt />&nbsp;&nbsp;<a href="/quiz"><button type="button" className="btn btn-link">Events</button></a></td>
        </tr>
      </tbody>
      <tfoot><tr></tr></tfoot>
    </table>
  </div>
</div>
  )
}

export default Panel