var React = require("react");

var Timeline = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Timeline of Elon Musk's Life</h3>
        <div>
          <ul>
            <li><b>June 28, 1971:</b> Born in South Africa</li>
            <li>
              <b>Age 12:</b>
              {" "}
              Creates and writes a video game called Blastar; sells it for the equivalent of $500
            </li>
            <li>
              <b>1988:</b>
              {" "}
              Graduates from Pretoria Boys High School with distinctions in science and computer studies
            </li>
            <li>
              <b>1989 to 1991:</b>
              {" "}
              Attends college at Queen’s University in Kingston, Ontario. Then transfers to the University of Pennsylvania; completed a BS in Economics (Wharton) and a BA with a major in physics
            </li>
            <li>
              <b>1995:</b>
              {" "}
              Moves to Silicon Valley; defers graduate program in applied physics and materials science at Stanford University to join the Internet boom
            </li>
            <li>
              <b>February 1999:</b>
              {" "}
              Sells Zip2 to Compaq, the personal computer company, for $307 million, of which $22 million went to Musk. Then forms X.com, which in 2000 morphs into PayPal
            </li>
            <li>
              <b>July 2002:</b>
              {" "}
              eBay acquires PayPal for $1.5 billion in stock, of which $165 million goes to Musk
            </li>
            <li><b>2002:</b> Becomes an American citizen</li>
            <li>
              <b>2002:</b> Founds SpaceX9
            </li>
            <li><b>2004:</b> Invests in Tesla Motors</li>
            <li>
              <b>2007:</b>
              {" "}
              SpaceX wins $1.6 billion contract to bring cargo to the International Space Station
            </li>
            <li><b>October 2008:</b> Becomes Tesla’s CEO</li>
            <li><b>Jun 29, 2010:</b> Tesla IPO</li>
            <li>
              <b>May 2012:</b>
              {" "}
              SpaceX becomes the first commercial vehicle to deliver a load of supplies to the International Space Station.
            </li>
            <li>
              <b>June 2012:</b>
              {" "}
              Tesla begins deliveries of the all-electric Model S
            </li>
            <li>
              <b>August 2013:</b> Releases sketch and concept of the Hyperloop
            </li>
            <li>
              <b>2013 to Present:</b>
              {" "}
              Much more since then but the list I copied this from ended here!
            </li>
            {" "}
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Timeline;
