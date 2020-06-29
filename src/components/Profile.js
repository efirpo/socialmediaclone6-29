import React from 'react';
import AboutMe from './AboutMe';
import Photo from './Photo';


function Profile() {
  return (
    <React.Fragment>
      <div id="profie">
        <AboutMe />
        <Photo />
      </div>
    </React.Fragment>
  )
}

export default Profile;