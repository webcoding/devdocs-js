'use strict';

import React from 'react'

var Component = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Oops!</h1>
        <p>
          <strong>The page you were looking for doesn't exist.</strong><br />
          Go back to <a href="http://devdocs.io">devdocs.io</a>.
        </p>
      </div>
    );
  }
});

export default Component
