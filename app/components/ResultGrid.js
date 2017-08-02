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
    const style = {
      resultsList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      },
      result: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%',
        margin: '25px 0'

        textBox: {
          position: 'absolute',
          border: '2px solid #000',
          padding: '30px 60px',
          left: 160,
          width: 140,
          zIndex: '-1'
        }
      }
    }

    const getImage = function (img){
      return {
        background: 'url('+ img + ')',
        width: 200,
        height: 200,
        border: '1px solid #ececec',
        borderRadius: '50%',
        backgroundSize: 'cover'
      }
    }

    return (
      <div>
      <button onClick={this.handleClick}>Search Again</button>
      <div>{this.props.results.length} Results</div>
      <div> Window: {this.props.results[0].description} - {this.props.results[0].type}</div>
      <div style={style.resultsList} className='result-list'>
        {this.props.results.map(function (result, index) {
          return (
            <div style={style.result} key={result.botanical_name}>
              <div id={result.english_name} style={getImage(result.image_url)}></div>
              <div style={style.result.textBox}>
                <h4>{ result.english_name }</h4>
                <h5>{ result.botanical_name }</h5>
                <p>{ result.frequency }</p>
                <p>{ result.instruction }</p>
              </div>
            </div>
            )
          })}
      </div>
      </div>
    )
  }

}

module.exports = ResultGrid;
