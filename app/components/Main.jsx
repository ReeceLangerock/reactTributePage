var React = require("react");
var Timeline = require("Timeline");
var Title = require("Title");
var Image = require("Image");
var Quote = require("Quote");
var Footer = require("Footer");


var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Title />
        <Image source="http://www.zerohedge.com/sites/default/files/images/user5/imageroot/elon%20musk_0.jpg" />

        <Timeline />
        <Quote />
        <Footer />

      </div>
    );
  }
});

module.exports = Main;
