const React = require('react');

class Hero extends React.Component {

  render() {
    const style = {
      background: 'url("../assets/hero-img.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: '50% 50%',
      height: '100vh'
    }

    return (
      <div
        className='hero-container'
        style={style}>
        <div>
          <h1>OKCactus</h1>
          <h2>Lorem Ipsum</h2>
        </div>
        <div className='arrow-box'>
        </div>
      </div>
    )
  }

}

module.exports = Hero;
