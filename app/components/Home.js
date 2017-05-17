const React = require('react');
const Hero = require('./Hero')
const Search = require('./Search')

class Home extends React.Component {

  render() {
    return (
      <div>
        <Hero />
        <Search />
      </div>
    )
  }
}

module.exports = Home;
