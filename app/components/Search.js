const React = require('react');
const $ = require('jquery');
const LightOptions = require('./LightOptions');
const WaterOptions = require('./WaterOptions');

class Search extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    lightid: -1,
    waterid: -1
  }
  this.handleLightChange = this.handleLightChange.bind(this);
  this.handleWaterChange = this.handleWaterChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleLightChange(value) {
  this.setState({lightid : value})
}

handleWaterChange(value) {
  this.setState({waterid : value})
}

handleSubmit(event) {
  event.preventDefault();
  this.searchDB()
}

searchDB () {
  $.ajax({
    url: '/search',
    type: 'POST',
    data: {
      lightid: this.state.lightid,
      waterid: this.state.waterid
    }
  }).done((data) =>{
    console.log(data)
  })
}

  render() {
    return (
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
    )
  }
}

module.exports = Search;
