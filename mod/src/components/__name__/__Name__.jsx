import React from 'react';
import './<%- Name %>.less';

class <%- Name %> extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mod-<%= name %>">
        component <%= name %>
      </div>
    );
  }
}

<%- Name %>.propTypes = {

};

<%- Name %>.defaultProps = {

};

export default <%- Name %>;
