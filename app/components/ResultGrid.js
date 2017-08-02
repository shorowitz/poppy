const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const ExpandedResult = require('./ExpandedResult');


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
        backgroundColor: '#fff',
        backgroundImage: 'url('+ img + ')',
        width: 250,
        height: 250,
        border: '1px solid #ececec',
        borderRadius: '50%',
        backgroundSize: 'cover'
      }
    }

    const style = {
    result: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minWidth: '45%',
      margin: '25px 0'
    },
    textBox: {
      position: 'absolute',
      border: '2px solid #000',
      padding: '30px 10px 30px 150px',
      left: 120,
      width: 200,
      minHeight: 120,
      zIndex: '-1'
    },
    careInstr: {
      margin: '10px 0'
    }
  }

  return this.props.results.map( (result, index) => {
            return (
              <div onClick={() => this.toggleState(index)} style={style.result} key={result.botanical_name}>
                <div id={result.english_name} style={getImage(result.image_url)}></div>
                <div style={style.textBox}>
                  <h4>{ result.english_name }</h4>
                  <h5>{ result.botanical_name }</h5>
                  <div style={style.careInstr}>
                    <h6>Frequency:</h6>
                    <p>
                      { result.frequency }
                    </p>
                  </div>
                  <div style={style.careInstr}>
                    <h6>Care Instructions:</h6>
                    <p>
                      { result.instruction }
                    </p>
                  </div>
                </div>
                <div> { this.state.active[index] ? (
                  <ExpandedResult plant={ result.english_name } onClick={this.toggleState} />
                ):(
                  null
                )}
                </div>
              </div>
            )
          })
  }

  render () {

    const style = {
      resultsList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }
    }

    return (
      <div>
        <button onClick={this.handleClick}>Search Again</button>
        <div>{this.props.results.length} Results</div>
        <div > Window: {this.props.results[0].description} - {this.props.results[0].type}</div>
        <div style={style.resultsList} className='result-list'>
          {this._renderList()}
        </div>
      </div>
    )
  }

}

module.exports = ResultGrid;
