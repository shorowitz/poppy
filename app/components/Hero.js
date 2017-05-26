const React = require('react');

class Hero extends React.Component {

  render() {
    const style = {
      main: {
        position: 'relative',
        height: '100vh',
        background: 'url("../assets/hero-img.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: '50% 100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      headerText: {
        textAlign: 'right',
        marginRight: '10%',
        h1: {
          fontWeight: 700,
          color: '#fff'
        },
        h2: {
          fontWeight: 400,
          color: '#243d46'
        }
      },
      arrow: {
        height: 1,
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
            <h2
              style={style.headerText.h2}>
                lorem ipsum dolor, sit amet
            </h2>
        </div>
        <div
          className='arrow'
          style={style.arrow}>
        </div>
      </div>
    )
  }

}

module.exports = Hero;
