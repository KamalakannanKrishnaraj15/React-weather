var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are the few examples try out:</p>
      <ol>
          <li>
            <Link to="/?Location=Brisbane"> Brisbane AU</Link>
          </li>
          <li>
          <Link to="/?Location=Rio"> Rio Brazil </Link>
          </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
