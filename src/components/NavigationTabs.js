import React from 'react';

function NavigationTabs() {
  return (
    <React.Fragment>
      <div id="navigation-tabs" class="col-md-6">
        <button type="button" class="nav-btn">Home</button>
        <button type="button" class="nav-btn">Notifications</button>
        <button type="button" class="nav-btn">Messages</button>
      </div>
    </React.Fragment>
  );
}

export default NavigationTabs;