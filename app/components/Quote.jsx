var React = require("react");

var Quote = React.createClass({
  render: function() {
    return (
      <div>
        <h4>
          "If something is important enough, even if the odds are against you, you should still do it."
          {" "}
        </h4>
        <h5><b><em>- Elon Musk</em></b></h5>
      </div>
    );
  }
});

module.exports = Quote;
