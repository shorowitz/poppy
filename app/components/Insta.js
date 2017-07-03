const React = require('react');
const $ = require('jquery');
const Instafeed = require('react-instafeed').default;

class Insta extends React.Component {

  constructor(props){
    super(props)

    this.getConcise = this.getConcise.bind(this)
  }

  getConcise(word) {
    const str = word.replace(/\s+/g, '')
    return str;
  }

  render() {
    const instafeedTarget = 'instafeed-' + this.getConcise(this.props.index);
    const plant = this.getConcise(this.props.plant);

      return (
        <div id={instafeedTarget}>
         <Instafeed
           target={instafeedTarget}
           tagName={`${plant}`}
           clientId='039ffc026c2648ad87e0a59dab513102'
           userId='5384738351'
           accessToken='5384738351.ba4c844.fe772b69f89049eba4d3dacecbb2bd88'
           limit='5'
           ref='instafeed'
           resolution='low_resolution'
           sortBy='most-recent'
           template=''
         />
        </div>
      )
    }
}

module.exports = Insta;
