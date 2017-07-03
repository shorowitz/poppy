const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const $ = require('jquery');
const LightOptions = require('./LightOptions');
const WaterOptions = require('./WaterOptions');
const ResultGrid = require('./ResultGrid');

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lightid: -1,
      waterid: -1,
      results: null
    }
    this.handleLightChange = this.handleLightChange.bind(this);
    this.handleWaterChange = this.handleWaterChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleLightChange(value) {
    this.setState({lightid : value})
  }

  handleWaterChange(value) {
    this.setState({waterid : value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.refs.searchForm.reset();
    this.searchDB()
  }

  handleReset() {
    this.setState({results: null,
                  lightid: -1,
                  waterid: -1})
  }

  searchDB () {
    if (this.state.lightid != -1 && this.state.waterid != -1) {
      $.ajax({
        url: '/search',
        type: 'POST',
        data: {
          lightid: this.state.lightid,
          waterid: this.state.waterid
        }
      }).done((data) =>{
        console.log(data)
        this.setState({results:data})
      })
    } else {
      window.alert("make both selections please!")
    }
  }

  render() {
    const instafeedTarget = 'instafeed';
    return (
      <div>
        {this.state.results === null ? (
          <div className='search-container'>
            <form ref="searchForm" onSubmit={this.handleSubmit}>
              <LightOptions
                onSubmit={this.handleLightChange} />
              <WaterOptions
                onSubmit={this.handleWaterChange} />
              <div>
                <input type="submit" value="Search" />
              </div>
            </form>
          </div>
        ):(
            <ResultGrid results={this.state.results} onClick={this.handleReset}/>
        )}
    </div>

    )
  }

}

module.exports = Search;
