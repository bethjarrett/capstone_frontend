import React from 'react';

export default function Splash({ funcNav }) {
  funcNav(false);

  return (
    <div className="d-flex position-relative vh-100 text-center bg-primary">
        <div className="display-middle">
        <div className='text-white splash-blurb'>
        <p>In October 2005, I used my university email address to open a Facebook account. I documented my life on it: job woes, international moves, dirty laundry, and too much information peppered between blurry phone pictures and Farmville invitations.</p>
        <p>I quit social media in 2019, and have been considering my relationship with this <em>account</em> ever since. So I scraped it. I took all my old posts, culled them down, and reflected on it all.</p>
        <p>Forget yearbook.</p> <p className="navbar-brand">Welcome to my scrapebook.</p></div>
        <a className="btn btn-light btn-xl" href="/wall">Enter</a>
    </div>
</div>
  );
}
