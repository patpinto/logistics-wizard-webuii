import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import classes from './Dashboard.scss';
import Map from './Map';

export default class Dashboard extends React.PureComponent {
  constructor(props) {
    super(props);
    props.getAdminData(props.params.guid);
  }

  render() {
    return (
      <div className={classes.dashboard}>
        <h4>Dashboard {this.props.dbdata ? '' : <i className="fa fa-spinner fa-spin" />}</h4>
        <Tabs className={classes.tabs}>
          <Tab label="Map">
            <div className={classes.map}>
              <Map
                className={classes.map}
                distributionCenters={this.props.dbdata ? this.props.dbdata['distribution-centers'] : []}
                shipments={this.props.dbdata ? this.props.dbdata.shipments : []}
                retailers={this.props.dbdata ? this.props.dbdata.retailers : []}
              />
            </div>
          </Tab>
          <Tab label="Raw Data">
            <p>Demo Name: {this.props.demoName || 'loading...'}</p>
            <pre>{this.props.dbdata ? JSON.stringify(this.props.dbdata, null, 2) : 'loading...'}</pre>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

Dashboard.propTypes = {
  demoName: React.PropTypes.string.isRequired,
  dbdata: React.PropTypes.object.isRequired,
  getAdminData: React.PropTypes.func.isRequired,
  params: React.PropTypes.object.isRequired,
};
