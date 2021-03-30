import React from "react";
import { withRouter } from "react-router-dom";
import { TOKEN_NAME } from "../config/constants";

function requireAuth(ComposedComponent) {
  const Authorize = (props) => {
    React.useEffect(() => {
      const token = sessionStorage.getItem(TOKEN_NAME);
      if (!token) props.history.replace("signin");
    }, [props.history]);

    return (
      <div className="content-container">
        <ComposedComponent {...props} />
      </div>
    );
  };
  return withRouter(Authorize);
}
export default requireAuth;
