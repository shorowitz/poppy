const React = require('react');
const $ = require('jquery');

class LightOptions extends React.Component {
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
      function () {
        this.props.onSubmit(
          this.state.id
        );
      }
    )
  }

  render() {
    const style = {
      main: {
        display: 'flex'
      },
      form: {
        width: '50%',
        background: '#faf9f9',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        textAlign: 'right',
        padding: '0 6%',
        h3: {
          color: '#b0899b'
        },
        select: {
          border: '2px solid rgba(176, 137, 155, .4)'
        }
      },
      image: {
        height: '50vh',
        width: '50%',
        background: 'url("../assets/search-image1.jpg")',
        backgroundSize: 'cover',
        padding: '0 6%'
      }
    }

    return (
      <div style={style.main}>
        <div style={style.form} className="search-form">

          <h3 style={style.form.h3}> Light <br /> Conditions </h3>

          <div>
            <label>
              <select style={style.form.select} onChange={this.handleChange}>
                <option value="0">Where are your windows?</option>
                <option value="1">A room without windows / artifical light room</option>
                <option value="2">North-facing window, 0-2 hours of sun</option>
                <option value="3">East-facing window, 0-2 hours of sun</option>
                <option value="4">West-facing window, 2+ hours of sun</option>
                <option value="5">South-facing window, 4+ hours of sun</option>
                <option value="6">Behind a glass block or sheer curtain on a North- or East-facing window</option>
                <option value="7">Behind a glass block or sheer curtain on a South- or West-facing window</option>
              </select>
            </label>
          </div>
        </div>

        <div style={style.image}>
        </div>
      </div>
    )
  }
}

module.exports = LightOptions;
