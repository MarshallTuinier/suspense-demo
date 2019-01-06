import React from "react";
import moment from "moment";
import jquery from "jquery";
import lodash from "lodash";

const Today = props => {
  const date = moment().format("dddd, MMMM Do YYYY");
  return <h2>Today is {date} you dummy!</h2>;
};

export default Today;
