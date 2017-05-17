const React = require('react');
const $ = require('jquery');

class LightOptions extends React.Component {
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
      function () {
        this.props.onSubmit(
          this.state.id
        );
      }
    )
  }

  render() {
    return (
      <div>
        LIGHT CONDITIONS
        <div>
          <label>
            Where in your apartment would you like your plant to live?
            <select onChange={this.handleChange}>
              <option value="-1">Select a Window</option>
              <option value="0">A room without windows / artifical light room</option>
              <option value="1">North-facing window, 0-2 hours of sun</option>
              <option value="2">East-facing window, 0-2 hours of sun</option>
              <option value="3">West-facing window, 2+ hours of sun</option>
              <option value="4">South-facing window, 4+ hours of sun</option>
              <option value="5">Behind a glass block or sheer curtain on a North- or East-facing window</option>
              <option value="6">Behind a glass block or sheer curtain on a South- or West-facing window</option>
            </select>
          </label>
        </div>
      </div>
    )
  }
}

module.exports = LightOptions;
