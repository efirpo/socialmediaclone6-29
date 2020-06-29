import React from "react";
import NavigationTabs from "./NavigationTabs";

function Header() {
  return (
    <React.Fragment>
      <div id="header">
        <NavigationTabs />
        <div id="search-tweet">
          <form>
            <input class="header-inputs" type="text" name="search" placeholder="Search.." />
            <input class="header-inputs" id="tweet" type="text" name="tweet" placeholder="Tweet" />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;