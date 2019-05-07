import React, { Component } from "react";
import Chart from "./Chart";
import Map from "./Map";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

class Visualization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMapView: true
    };
  }

  handleDataView = () => {
    this.setState({
      isMapView: !this.state.isMapView
    });
  };
  render() {
    const { isMapView } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Button className={classes.button} variant="contained" color="primary" onClick={this.handleDataView}>
          {isMapView ? "Show Chart" : "Show Map"}
        </Button>
        {isMapView ? <Map /> : <Chart />}
      </div>
    );
  }
}

const styles = {
    button: {
      margin: 20
    }
  };
  

export default withStyles(styles)(Visualization);
