const React = require('react');
const $ = require('jquery');

class WaterOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "-1"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState(
      {id: value},
      function(){
        this.props.onSubmit(
          this.state.id
        );
      }
    )
  }

  render() {
    return (
      <div>
        WATER FREQUENCY
        <div>
          <label>
            How often can you check on your plant?
            <select onChange={this.handleChange}>
              <option value="-1">Select Water Frequency</option>
              <option value="0">Two or three times a week - Keep the soil lightly moist</option>
              <option value="1">Once or twice a week - Let top inch of soil dry</option>
              <option value="2">Every one or two weeks - Let the soil dry completely</option>
              <option value="3">I Don't Care!</option>
            </select>
          </label>
        </div>
      </div>
    )
  }

}

module.exports = WaterOptions;
