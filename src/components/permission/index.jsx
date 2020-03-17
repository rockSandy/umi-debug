import { Result } from "antd";

import React from "react";
import safeGet from "lodash.get";


// TODO:
function hasPermission(path) {
  if (path === '/') {
    return true;
  }
}

function Permission(props) {

  const { children } = props;
  if (!children) {
    return null;
  }
  const path = safeGet(props, 'children.props.route.path');
  if (hasPermission(path)) {
    return children
  }

  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
    />
  )
}

export default Permission;
