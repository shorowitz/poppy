const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const $ = require('jquery');

class ExpandedResult extends React.Component {

  constructor(props) {
    super(props)

    this.state = {results : []}
  }

  componentDidMount() {

    const plant = this.props.plant;

    $.ajax({
      url: '/insta',
      type: 'POST',
      data: {
        plant: plant
      }
    }).done((data) =>{
      this.setState({ results: data })
    })

  }

  _renderInstaList() {

    const style = {
      imageContainer : {
        maxWidth: '20%',
      },
      img : {
        width: '100%'
      }
    }

    return this.state.results.map( (result, index) => {
      return (
        <div key={result.id}>
          <div style={style.imageContainer}>
            <a target="_blank" href={result.link}>
              <img style={style.img} src={result.image} />
            </a>
          </div>
        </div>
      )
    })
  }


  render() {

    const style = {
      resultList: {
        display: 'flex'
      }
    }

    const plant = this.props.plant

    return (
      <div>
        <h3> Detailed Information for { plant } </h3>
        <p> This will be 'this.props.detailedInfo' </p>
        <div style={style.resultList} >
          { this._renderInstaList() }
        </div>
      </div>
    )

  }
}

module.exports = ExpandedResult;
