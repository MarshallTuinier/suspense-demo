import React from "react";
import moment from "moment";
import jquery from "jquery";
import lodash from "lodash";

const Tomorrow = props => {
  const date = moment()
    .add(1, "d")
    .format("dddd, MMMM Do YYYY");
  return <h2>Tomorrow is {date}, don't forget it!</h2>;
};

export default Tomorrow;
