import React from 'react';
import AboutMe from './AboutMe';
import Photo from './Photo';


function Profile() {
  return (
    <React.Fragment>
      <div id="profile">
        <Photo />
        <AboutMe />
      </div>
    </React.Fragment>
  )
}

export default Profile;