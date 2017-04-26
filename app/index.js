const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
require('./index.css');


class App extends React.Component {
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
      <div>
        Carrie!!
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('app')
)
