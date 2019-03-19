
/* IMPORT */

import * as React from 'react';
import * as is from 'electron-is';

/* HEADER */

const Header = () => {

  if ( !is.macOS () ) return null;

  return (
    <div className="layout-header titlebar">
      <span className="title">Select Data Directory</span>
    </div>
  );

};

/* EXPORT */

export default Header;
