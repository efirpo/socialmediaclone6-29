import React from 'react';
import Avatar from './Avatar';

function Photo() {
  return (
    <React.Fragment>
      <div id='photo'>
        <div id='bg-photo'>

        </div>
        <div id='self-photo'>
          <img id="main-avatar" src="https://i.dailymail.co.uk/i/pix/2014/09/19/1411087218778_wps_28_myspace_tom_8_Las_Vegas_A.jpg" />

        </div>
        <p><span id="name">Tom From MySpace</span></p>
        <div>
          <span id="photo-links"><p>Friends Followers Folololol</p></span>
        </div>
      </div>


    </React.Fragment >
  );
}
export default Photo;