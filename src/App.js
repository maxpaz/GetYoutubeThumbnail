import React, {Component} from 'react';
import './App.css';

import { 
  Container, 
  Row, 
  Col, 
  InputGroup, 
  FormControl, 
  Button } from 'react-bootstrap';

 class App extends Component{
  constructor(props) {
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

  render () {
    return (
    <Container fluid>
      <Row>
        <Col style={{backgroundColor: 'silver', color: 'white', padding: '0.8em'}}>
        <h1>GYTThumb</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <p>1º Copie e cole a URL do video do Youtube.
        <br/> 2º Pressione o botão "Obter".
        <br/> 3º Seja feliz!!<br/>
        </p>
        </Col>
      </Row>
      <Row>
        <Col>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Insira a URL do vídeo"
            aria-label="Insira a URL do vídeo"
            aria-describedby="basic-addon2"
            onChange={this.handleChangeURL.bind(this)}
          />
        </InputGroup>
        <Button variant="outline-secondary" size="lg" block onClick={this.OpenJPG}>
            Obter
        </Button>
        </Col>
      </Row>
    </Container>

    );
  }
}

export default App;
