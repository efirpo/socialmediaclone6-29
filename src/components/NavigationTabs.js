import React from 'react';

function NavigationTabs() {
  return (
    <React.Fragment>
      <div id="navigation-tabs col-md-6">
        <button type="button">Home</button>
        <button type="button">Notifications</button>
        <button type="button">Messages</button>
      </div>
    </React.Fragment>
  );
}

export default NavigationTabs;