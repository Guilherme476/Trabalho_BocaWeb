import './App.css';
import { Component } from 'react';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Baseboard } from './components/Baseboard';


class App extends Component{

  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('http://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}));
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs();
  }

  render(){
    const {odas} = this.state;
    return(
      <section>
        
       <Header
          busca={this.state.busca}
          buscaODA={this.buscaODA}
       />
        <Body
          odas={odas}
        />
        <Baseboard
        />

        </section>
    )
  }

}

export default App;
