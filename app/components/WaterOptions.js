const React = require('react');
const $ = require('jquery');

class WaterOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "0"
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
    const style = {
      main: {
        flexDirection: 'row-reverse'
      },
      form: {
        background: '#fff',
        h3: {
          color: '#243d46'
        },
        select: {
          border: '2px solid rgba(36, 61, 70, .4)'
        }
      },
      image: {
        background: 'url("../assets/search-image2.jpg")',
        backgroundSize: 'cover'
      }
    }

    return (
      <div className="form-container" style={style.main}>
        <div className="search-form" style={style.form}>

          <h3 style={style.form.h3}> Water <br /> Frequency </h3>

          <div>
            <label>
              <select onChange={this.handleChange}>
                <option value="0">how often can you water?</option>
                <option value="1">Two or three times a week - Keep the soil lightly moist</option>
                <option value="2">Once or twice a week - Let top inch of soil dry</option>
                <option value="3">Every one or two weeks - Let the soil dry completely</option>
                <option value="4">Don't Care!</option>
              </select>
            </label>
          </div>
        </div>

        <div className="form-bg" style={style.image}>
        </div>
      </div>
    )
  }

}

module.exports = WaterOptions;
