import React from 'react';
import classes from './MapMarker.scss';

export const MapMarker = (props) => {
  let markerIcon;
  switch (props.type) {
    case 'retailer':
      markerIcon = 'fa fa-circle';
      break;
    case 'shipment':
      markerIcon = 'fa fa-truck';
      break;
    default:
  }

  return (<div className={classes[props.type]}>
    {markerIcon ? <i className={markerIcon} /> : ''}
    <div className={classes.mapMarkerPopup}>
      {props.children}
    </div>
  </div>);
};

MapMarker.propTypes = {
  type: React.PropTypes.oneOf(['distributionCenter', 'retailer', 'shipment']).isRequired,
  children: React.PropTypes.element,
};

export default MapMarker;
