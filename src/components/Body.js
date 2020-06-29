import React from 'react';
import NavigationTabs from './NavigationTabs';
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