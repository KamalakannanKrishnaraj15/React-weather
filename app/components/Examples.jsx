var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are the few examples try out:</p>
      <ol>
          <li>
            <Link to="/?Location=Bengaluru"> Bengaluru IN</Link>
          </li>
          <li>
          <Link to="/?Location=Chennai"> Chennai IN </Link>
          </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
