const React = require('react');
const $ = require('jquery');
const Insta = require('./Insta');

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

    const getImage = function (img){
      return {
        background: 'url('+ img + ')',
        width: 50,
        height: 50
      }
    }

    return (
      <div>
      <button onClick={this.handleClick}>Search Again</button>
      <div>{this.props.results.length} Results</div>
      <div> Window: {this.props.results[0].description} - {this.props.results[0].type}</div>
      <div className='result-list'>
        {this.props.results.map(function (result, index) {
          return (
            <div key={result.botanical_name}>
              <div id={result.english_name} style={getImage(result.image_url)}></div>
              <div>
                <h4>{ result.english_name }</h4>
                <h5>{ result.botanical_name }</h5>
                <p>{ result.frequency }</p>
                <p>{ result.instruction }</p>
              </div>
              <Insta plant={result.english_name} index={result.botanical_name}/>
            </div>
            )
          })}
      </div>
      </div>
    )
  }

}

module.exports = ResultGrid;
