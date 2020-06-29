import React from 'react';
import Profile from './Profile';
import Feed from './Feed';
import Friends from './Friends';

function Body() {
  return (
    <React.Fragment>
      <div id="body">
        <Profile />
        <Feed />
        <Friends />
      </div>
    </React.Fragment>
  );
}

export default Body;