import React, { Component } from 'react';

export default class Home extends Component {constructor(props) {
    super(props);
    this.state = { URL: '' }

    // URL de test: https://www.youtube.com/watch?v=9psJEKbqhIs

    this.handleChangeURL = this.handleChangeURL.bind(this)

  }

  handleChangeURL = (event) => {
    this.setState({ URL: event.target.value })
  }

  OpenJPG = () => {
    if (this.state.URL.length < 43) {
      if (this.state.URL.length === 11) {
        window.open("https://i.ytimg.com/vi/" + this.state.URL + "/maxresdefault.jpg", "_blank");
      }
      if (this.state.URL.length === 35) {
        window.open("https://i.ytimg.com/vi/" + this.state.URL.substr(24) + "/maxresdefault.jpg", "_blank");
      }
      else {
        console.log("Nada acontece!")
      }
    } else {
      if (this.state.URL.length > 45) {
        window.open("https://i.ytimg.com/vi/" + this.state.URL.substring(32, 43) + "/maxresdefault.jpg", "_blank");
      } else {
        window.open("https://i.ytimg.com/vi/" + this.state.URL.substr(32) + "/maxresdefault.jpg", "_blank");
      }
    }
  }

  render() {
    return (
      <div>

          <div className="title">
            <h2>Get Youtube Thumbnail</h2>
          </div>

        <div className="box">
            <p><strong>Como usar:</strong><br/>
            1º Copie e cole a URL do video do Youtube.
            <br/> 2º Pressione o botão "Ir".
            <br/> 3º Seja feliz!!<br/>
            </p>
            <br/>
            <input placeholder="https://www.youtube.com/watch?v=9psJEKbqhIs" onChange={this.handleChangeURL.bind(this)} />
            &nbsp;&nbsp;&nbsp;
            <a class="waves-effect waves-light btn" onClick={this.OpenJPG}>Ir</a>
        </div>

        <a href="https://github.com/maxpaz/GetYoutubeThumbnail"><img className="imag" src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png" alt="Fork me on GitHub" /></a>

      </div>
    );
  }
}
