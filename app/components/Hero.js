const React = require('react');

class Hero extends React.Component {

  render() {
    const style = {
      main: {
        position: 'relative',
        background: 'url("../assets/hero-img.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: '50% 90%',
        height: '100vh'
      },
      headerText: {
        color: '#243d46',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'center',
        border: '1px solid blue',
        height: '100vh',
        paddingRight: 160,
        h1: {
          fontSize: 100,
          color: '#fff'
        }
      },
      arrow: {
        height: 50,
        width: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0
      }
    }

    return (
      <div
        className='hero-container'
        style={style.main}>
        <div
          style={style.headerText}>
            <h1
              style={style.headerText.h1}>
                OKCactus.
            </h1>
            <h2>lorem ipsum dolor, sit amet</h2>
        </div>
        <div
          style={style.arrow}>
        </div>
      </div>
    )
  }

}

module.exports = Hero;
