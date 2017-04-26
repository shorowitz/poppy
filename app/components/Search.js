const React = require('react');
const $ = require('jquery');

class Home extends React.Component {

  componentDidMount() {
    console.log('am i here')
    $.ajax({
      url: '/search',
      type: 'GET'
    }).done((data) =>{
      console.log(data)
    })
  }

  render() {
    return (
      <div className='home-container'>
        Search!
      </div>
    )
  }
}

module.exports = Home;
