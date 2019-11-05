'use strict';


import React from 'react'

var Component = React.createClass({
  render: function() {
    return (
      <div className="_app ">
        <header className="_header">
          <a className="_home-link"></a>
          <a className="_menu-link"></a>
          <form className="_search">
            <input type="search" className="_search-input" placeholder="Search&hellip;" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" maxlength="20" />
            <a className="_search-clear"></a>
            <div className="_search-tag"></div>
          </form>
          <h1 className="_logo">
            <a href="/" className="_nav-link" title="Offline API Documentation Browser">Developer</a>
          </h1>
          <nav className="_nav">
            <a href="/offline" className="_nav-link">Offline</a>
            <a href="/about" className="_nav-link">About</a>
            <a href="/news" className="_nav-link">News</a>
            <a href="/help" className="_nav-link">Tips</a>
          </nav>
        </header>
        <section className="_sidebar">
          <div className="_list">
            list  afd dd
          </div>
        </section>
        <section className="_container">
          <div className="_content _content-loading"></div>
        </section>
      </div>
    );
  }
});

export default Component
