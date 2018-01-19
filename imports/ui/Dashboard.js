import React, { Component } from 'react';

import PrivateHeader from './PrivateHeader';
import Map from './Map';
import Sidebar from './Sidebar';

export default () => {
  return (
    <div>
      <PrivateHeader title='React Sports' />
      <Map />
      <Sidebar />
    </div>
  )
}
