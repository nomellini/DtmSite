import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { solucaoActions } from '../_actions';

import { estadoActions } from '../_actions';
import { cidadeActions } from '../_actions';
import { mailcontroleActions } from '../_actions';

import Parser from 'html-react-parser';
import InputMask from 'react-input-mask';

class FaleConoscoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      empresa: '',
      telefone: '',
      info: '',
      estadoSelected: '',
      cidadeselected: '',
      estadoSelectedModal: '',
      cidadeselectedModal: '',
      assunto: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEstado = this.handleChangeEstado.bind(this);
    this.handleChangeEstadoModal = this.handleChangeEstadoModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ClearInputs = this.ClearInputs.bind(this);

  }

  componentDidUpdate() {

  }

  componentDidMount() {
    this.props.dispatch(estadoActions.getAll());

  }

  handleChangeEstado(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });

    this.props.dispatch(cidadeActions.GetCidadesByUF(value));

  }




  handleChangeEstadoModal(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });

    this.props.dispatch(cidadeActions.GetCidadesByUFModal(value));

  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  ClearInputs(e) {
    this.setState({
      submitted: false,
      nome: '',
      email: '',
      empresa: '',
      telefone: '',
      info: '',
      estadoSelected: '',
      cidadeselected: '',
      estadoSelectedModal: '',
      cidadeselectedModal: '',
      assunto: ''
    });

  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { cidadeselected, estadoSelected, assunto,nome,email,empresa,telefone,info } = this.state;
    const { dispatch } = this.props;
    if (cidadeselected && estadoSelected  &&  assunto  && nome  && email  && empresa  && telefone  && info) {

      dispatch(mailcontroleActions.FaleConosco(cidadeselected, estadoSelected, assunto,nome,email,empresa,telefone,info,'','' ));

      // $(".modal-center").hide();

    }
  }

  render() {
    const { user, estados, cidades,alert } = this.props;
    const { cidadeselected, estadoSelected, assunto,nome,email,empresa,telefone,info } = this.state;


    return (
      <div >

        <div className="row div-sobre-grupo-datamace div-empresa-quem-somos">
          <div className="col-md-6 div-sobre-grupo-datamace-text"><h2>Fale Conosco </h2>
            <p> A Datamace é provedora de uma solução de software para Recursos Humanos totalmente integrado e abrangente para suas necessidades.
              Se você tiver dúvidas sobre as soluções propostas pela Datamace, entre em contato conosco através do formulário abaixo ou ligue para +55 11 2714-6400.

            </p>
          </div><div className="col-md-6 div-sobre-grupo-datamace-img">
            <div className="row footer-redes-sociais"><div className="col-md-4">
              <img src="../public/images/icon-facebook.svg" /></div><div className="col-md-4">
                <img src="../public/images/icon-twitter.svg" /></div><div className="col-md-4">
                <img src="../public/images/icon-linkedin.svg" /></div></div>
            <div><img className="rounded" src="../public/images/empresa-reconhecimento.png" alt="O grupo datamace" />
            </div></div></div>

        <div className="row div-entre-em-contato" >
          <div className="col-md-6 div-entre-em-contato-text">


            <p>



              A Datamace sempre terá uma soluções para tornar melhor os seus processos de negócio otimizado a sua força de trabalho.</p>
          </div>
          <div className="col-md-6">
            <form role="form" style={{ minHeight: '584px', height: 'auto' }}>

              <div className="form-group">

                <select name="assunto" id="assunto" onChange={this.handleChange} value={assunto} style={{ width: '100%' }}>
                  <option value="">Escolha um assunto</option>
                  <option value="aliancas">Marketing (Alianças e informações sobre produtos e serviços)</option>
                  <option value="comercial">Comercial (Agendar uma demonstração e modelos de negócio)</option>
                  <option value="treinamento">Treinamento (Para obter mais conhecimento sobre nossas soluções)</option>
                  <option value="RH">Recursos Humanos (Para processos seletivos e oportunidades de emprego)</option>
                  <option value="administracao">Administração (Para assuntos gerais da administração)</option>
                </select>
              </div>


              <div className="form-group">

                <input type="text" name="nome" id="nome" placeholder="Digite seu nome" value={nome} onChange={this.handleChange} />
              </div>

              <div className="form-group">

                <input type="email" name="email" id="email" placeholder="Digite seu e-mail" value={email} onChange={this.handleChange} />
              </div>

              <div className="form-group form-select-div">
                <div className="form-group-item" style={{ marginRight: '3%' }}>

                  <select name="estadoSelected" id="estadoSelected" onChange={this.handleChangeEstado} value={estadoSelected}>
                    <option disabled value="">Selecione o estado</option>

                    {estados && estados.items && estados.items.map((estado) =>
                      <option value={estado.uf} key={estado.uf}>{estado.nome}</option>

                    )}
                  </select>
                </div>
                <div className="form-group-item">

                  <select name="cidadeselected" id="cidadeselected" onChange={this.handleChange} value={cidadeselected}>
                    <option disabled value="">Selecione a cidade</option>
                    {estadoSelected && cidades && cidades.items && cidades.items.map((cidade) =>
                      <option value={cidade.nome} key={cidade.nome}>{cidade.nome}</option>

                    )}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <input type="text" name="empresa" id="empresa" placeholder="Digite o nome de sua empresa" value={empresa} onChange={this.handleChange} />
              </div>

              <div className="form-group">
                <input type="text" name="telefone" id="telefone" placeholder="Digite seu telefone para contato" value={telefone} onChange={this.handleChange} />
              </div>

              <div className="form-group">

                <textarea name="info" id="info" placeholder="Mensagem" value={info} onChange={this.handleChange} />
              </div>
              <div className={"div-alert-login form-group"} >
                    {alert.message &&
                            <div className={`alert ${alert.type}`}  style={{textAlign: 'center'}}>
                                <img src="../public/images/icons/icon-error.svg" className="menu-icon" style={{marginRight: '1%'}}/>
                                <span>{alert.message}</span></div>
                        }
                        </div>
              <div className="form-divs">
                <a>
                  Limpar dados
                </a>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
                  Enviar
                </button>
                
              </div>
            </form>
          </div>
        </div>



      </div>

    );
  }
}

function mapStateToProps(state) {
  const { users, authentication, solucaos, cidades, estados, cidadesmodais, noticias, solucaosnew,alert } = state;
  const { user } = authentication;
  return {
    user,
    users,
    solucaos,
    estados, cidades, cidadesmodais, noticias, solucaosnew,
    alert
  };
}

const connectedFaleConoscoPage = connect(mapStateToProps)(FaleConoscoPage);
export { connectedFaleConoscoPage as FaleConoscoPage };