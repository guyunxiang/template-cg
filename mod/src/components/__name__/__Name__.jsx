import './<%- Name %>.less';
<% if (i18n) { %>
import i18n from 'i18n';
<% } %>

const { React } = window;
class <%- Name %> extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const me = this;
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
