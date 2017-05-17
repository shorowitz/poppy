const React = require('react');
const NavLink = require('react-router-dom').NavLink;

class Nav extends React.Component {

  render() {
    const style = {
      position: 'fixed'
    }

    return (
      <div className='nav' style={style}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    )
  }
}

module.exports = Nav;
