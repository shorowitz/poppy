const React = require('react');
const $ = require('jquery');

class ResultGrid extends React.Component {

  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onClick();
  }

  render () {
    return (
      <div>
      <button onClick={this.handleClick}>Search Again</button>
      <div>{this.props.results.length} Results</div>
      <div> Window: {this.props.results[0].description} - {this.props.results[0].type}</div>
      <ul className='result-list'>
        {this.props.results.map(function (result, index) {
          return (
            <li key={result.english_name}>{ result.english_name }<br/>
              {result.frequency} <br/>
              {result.instruction}
              <img src={result.image_url} />
            </li>
            )
          })}
      </ul>
      </div>
    )
  }

}

module.exports = ResultGrid;
