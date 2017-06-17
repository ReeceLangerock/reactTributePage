var React = require("react");

var Image = React.createClass({
  render: function() {
    return (
      <div>
        <img src={this.props.source} />
      </div>
    );
  }
});

module.exports = Image;
