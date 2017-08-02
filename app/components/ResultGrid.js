const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');


class ResultGrid extends React.Component {

  constructor(props){
    super(props)
    this.state = { active: [] }

    this.handleClick = this.handleClick.bind(this)
    this.toggleState = this.toggleState.bind(this)
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onClick();
  }

  toggleState(index) {
    let active = this.state.active.slice();
    active[index] = !active[index];
    this.setState({active});
  }

  _renderList() {
    const getImage = function (img){
      return {
        background: 'url('+ img + ')',
        width: 50,
        height: 50
      }
    }

    return this.props.results.map( (result, index) => {
              return (
                <div onClick={() => this.toggleState(index)} key={result.botanical_name}>
                  <div id={result.english_name} style={getImage(result.image_url)}></div>
                  <div>
                    <h4>{ result.english_name }</h4>
                    <h5>{ result.botanical_name }</h5>
                    <p>{ result.frequency }</p>
                    <p>{ result.instruction }</p>
                    <div>{ this.state.active[index] ? (<h1> ya </h1> ):( <h2> no </h2>) }</div>
                  </div>
                </div>
              )
            })
  }

  render () {

    return (
      <div>
        <button onClick={this.handleClick}>Search Again</button>
        <div>{this.props.results.length} Results</div>
        <div > Window: {this.props.results[0].description} - {this.props.results[0].type}</div>
        <div className='result-list'>
          {this._renderList()}
        </div>
      </div>
    )
  }

}

module.exports = ResultGrid;
