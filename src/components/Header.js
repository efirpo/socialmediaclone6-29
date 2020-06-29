import React from "react";
import NavigationTabs from "./NavigationTabs";

function Header() {
  return (
    <React.Fragment>
      <NavigationTabs />
      <form>
        <input class="header-inputs" type="text" name="search" placeholder="Search.." />
        <input class="header-inputs" type="text" name="tweet" placeholder="tweet" />
      </form>
    </React.Fragment>
  );
}

export default Header;