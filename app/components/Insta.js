const React = require('react');
const $ = require('jquery');

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
    const client = process.env.INSTA_CLIENT;
    const user = process.env.INSTA_USER;
    const token = process.env.INSTA_TOKEN;

      return (
        <div id={instafeedTarget}>
         <Instafeed
           target={instafeedTarget}
           tagName={`${plant}`}
           clientId={`${client}`}
           userId={`${user}`}
           accessToken={`${token}`}
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
