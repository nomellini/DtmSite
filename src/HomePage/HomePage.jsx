import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { solucaoActions } from '../_actions';

import { estadoActions } from '../_actions';
import { cidadeActions } from '../_actions';
import { noticiaActions } from '../_actions';
import { mailcontroleActions } from '../_actions';

import Parser from 'html-react-parser';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estadoSelected: '',
      cidadeselected: '',
      estadoSelectedModal: '',
      cidadeselectedModal: '',
      nomeModal: '',
      empresaModal: '',
      emailModal: '',
      telefoneModal: '',
      infoModal: '',
      submittedModal: false,
      nome: '',
      empresa: '',
      email: '',
      telefone: '',
      info: '',
      submitted: false,
      qtdefuncionarios: '',
      cargo: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEstado = this.handleChangeEstado.bind(this);
    this.handleChangeEstadoModal = this.handleChangeEstadoModal.bind(this);
    this.handleSubmitModal = this.handleSubmitModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.ClearInputs = this.ClearInputs.bind(this);
    
  }

  componentDidUpdate(){
    $('.carousel').carousel();


  }

  componentDidMount() {
    // this.props.dispatch(userActions.getAll());
    this.props.dispatch(solucaoActions.getAllParent());
    this.props.dispatch(solucaoActions.GetTbSolucaoBYSlugNew("Home"));
    this.props.dispatch(estadoActions.getAll());
    this.props.dispatch(noticiaActions.getAll());


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

  handleSubmitModal(e) {
    e.preventDefault();

    this.setState({ submittedModal: true });
    const { nomeModal,empresaModal,estadoSelectedModal,cidadeselectedModal,emailModal,telefoneModal,infoModal } = this.state;
    const { dispatch } = this.props;
    if (nomeModal && empresaModal && estadoSelectedModal && cidadeselectedModal && emailModal && telefoneModal && infoModal) {

      dispatch(mailcontroleActions.SejaParceiro(nomeModal,empresaModal,estadoSelectedModal,cidadeselectedModal,emailModal,telefoneModal,infoModal ));
      // this.setState({ submittedModal: false });
      this.ClearInputs();

      setTimeout(() => {
        this.setState({ submittedModal: false });
      }, 10000);

    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const {nome,empresa,estadoSelected,cidadeselected,email,telefone,info,qtdefuncionarios,cargo } = this.state;
    const { dispatch } = this.props;
    if (nome && empresa && estadoSelected && cidadeselected && email  && info) {

      dispatch(mailcontroleActions.FaleConosco(cidadeselected, estadoSelected, "aliancas",nome,email,empresa,telefone,info,qtdefuncionarios,cargo ));
      // this.setState({ submitted: false});
      this.ClearInputs();

      setTimeout(() => {
        this.setState({ submitted: false });
      }, 10000);
    }
  }

  ClearInputs(e) {
      this.setState({
            estadoSelected: '',
            cidadeselected: '',
            estadoSelectedModal: '',
            cidadeselectedModal: '',
            nomeModal: '',
            empresaModal: '',
            emailModal: '',
            telefoneModal: '',
            infoModal: '',
            nome: '',
            empresa: '',
            email: '',
            telefone: '',
            info: '',
            qtdefuncionarios: '',
            cargo: '',
      });
  }

  render() {
    const { user, solucaos, estados, cidades, cidadesmodais, noticias, solucaosnew,alert } = this.props;
    const { cidadeselected, estadoSelected, estadoSelectedModal, cidadeselectedModal,nome,empresa,email,telefone,info,nomeModal,empresaModal,emailModal,telefoneModal,infoModal,qtdefuncionarios,cargo,submitted,submittedModal } = this.state;

    var root = document.documentElement;
    const lists = document.querySelectorAll('.hs-solucao-home');
    lists.forEach(el => {
      const listItems = el.querySelectorAll('li');
      const n = el.children.length;
      el.style.setProperty('--total', n);
    });

    if (solucaos.items) {
      var root = document.documentElement;
      const lists = document.querySelectorAll('.row-solucoes .hs-solucao-home ');
      lists.forEach(el => {
        const listItems = el.querySelectorAll('li');
        const n = el.children.length;
        el.style.setProperty('--total', solucaos.items.length);
      });
    }

    if (noticias.items) {
      const lists = document.querySelectorAll('.div-noticias .hs-solucao-home ');
      lists.forEach(el => {
        const listItems = el.querySelectorAll('li');
        const n = el.children.length;
        el.style.setProperty('--total', noticias.items.length);
      });

    }

    return (
      <div >

        {solucaosnew && solucaosnew.items && solucaosnew.items.map((solucao, index) =>
          <div key={index}>
            {solucao.menu == "Banner" &&
              Parser(solucao.conteudo)
            }

          </div>


        )}

        <div className="row row-solucoes" >
          <div className="col-md-12">

            <h4 style={{ marginLeft: '3%' }}>Nossas Soluções</h4>
            {solucaos && solucaos.error && <span className="text-danger">ERROR: {solucaos.error}</span>}

            <div className="div-home-scroll-tabs">
              <div className="hs-solucao-home" style={{ padding: '3%' }}>


                {solucaos && solucaos.items && solucaos.items.map((solucao) =>
                  <div className="" key={solucao.menu}>
                    <div className="card">

                      {solucao.imagePath &&
                        <img className="card-img-top" src="..." alt="Card image cap" src={`https://api.datamace.com.br/StaticFiles/images/solucoes/${solucao.imagePath}`} />

                      }
                      {!solucao.imagePath && <img className="card-img-top" src="..." alt="Card image cap" src="../public/images/solutions.svg" />
                      }
                      <div className="card-body">
                        <h5 className="card-title">{solucao.slug}</h5>
                        <p className="card-text">{solucao.titulo}</p>
                        <a href={solucao.menu} className="card-link">Saiba mais</a>
                      </div>
                    </div>
                  </div>


                )}
              </div>
            </div>
          </div>
        </div>
        <div className="row div-seja-parceiro" data-toggle="modal" data-target="#sejaparceiro">
          <div className="col-md-12">
            <button type="button" className="btn btn-block btn-info" >
              Seja um parceiro Datamace
            </button>
          </div>
        </div>

        {solucaosnew && solucaosnew.items && solucaosnew.items.map((solucao, index) =>
          <div key={index}>

            {solucao.menu == "O Grupo Datamace" &&
              Parser(solucao.conteudo)
            }
          </div>

        )}


        <div className="row div-e-social">
          <div className="col-md-6">
            <h3>
              Saiba como atender as exigências do eSocial.
            </h3>
            <a type="button" className="btn btn-success" href="http://www.guiaesocial.com.br/"  target="_blank">
              Acessar eSocial
            </a>
          </div>

        </div>
        <div className="row div-noticias">
          <div className="div-noticias-header">
            <h4>Últimas notícias</h4>
            <a href="/noticias">Ver todas as notícias</a>
          </div>

          <div className="col-md-12">
            <div className="row">

              <div className="div-home-scroll-tabs">
                
                <div className="hs-solucao-home" >

                  {noticias.items && noticias.items.map((noticia) =>

                    <div className="div-item-noticias" key={noticia.notId}>
                      <div className="card">
                        {!noticia.notImagem && <img className="card-img-top" src="../public/images/noticia-1.png" />}
                        {noticia.notImagem && <img src={`https://api.datamace.com.br/StaticFiles/images/noticias/${noticia.notImagem}`} />}

                        <div className="card-block">
                          <h5 className="card-title">
                            Notícia
                          </h5>
                          <p className="card-text">
                            {noticia.notTitulo}                      </p>
                          <div className="card-noticias-a">
                            <a href={`/noticia-read?notId=${noticia.notId}`}>Saiba mais</a>

                          </div>
                        </div>
                      </div>
                    </div>


                  )}


                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row div-entre-em-contato" >
          <div className="col-md-6 div-entre-em-contato-text">
            <p>
              Entre em contato e receba todas as informações sobre a Datamace.                    </p>
          </div>
          <div className="col-md-6">
            <form role="form">
            {submitted &&
              <div className={"div-alert-login form-group"} style={{margin: 0}}>
                    {alert.message &&
                            <div className={`alert ${alert.type}`}  style={{textAlign: 'center', padding: 0}}>
                                <img src="../public/images/icons/icon-error.svg" className="menu-icon" style={{marginRight: '1%'}}/>
                                <span>{alert.message}</span></div>
                        }
                        </div>
              }

              <div className="form-group">

                <input type="text" name="nome" id="nome" placeholder="Digite seu nome" value={nome} onChange={this.handleChange} />
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
                <input type="text" name="empresa" id="empresa" placeholder="Digite o nome de sua empresa" value={empresa} onChange={this.handleChange}/>
              </div>


              <div className="form-group form-select-div">
                <div className="form-group-item" style={{ marginRight: '3%'}}>
                <input type="number" name="qtdefuncionarios" id="qtdefuncionarios" value={qtdefuncionarios} onChange={this.handleChange} style={{ width: '45%' }} placeholder="Quantidade de funcionários"/>

                  {/* <select name="qtdefuncionarios" id="qtdefuncionarios" onChange={this.handleChange} value="">
                    <option disabled value="">Quantidade de funcionários</option>
                  </select> */}
                </div>
                <div className="form-group-item">
                <input type="text" name="cargo" id="cargo" placeholder="Digite seu cargo" value={cargo} onChange={this.handleChange} style={{ width: '45%' }}/>

                  {/* <select name="cargo" id="cargo" onChange={this.handleChange} value="">
                    <option disabled value="">Selecione seu cargo</option>
                  </select> */}
                </div>
              </div>


              <div className="form-group">

                <input type="email" name="email" id="email" placeholder="Digite seu e-mail" value={email} onChange={this.handleChange}/>
              </div>
              <div className="form-group">

                <input type="text" name="info" id="info" placeholder="Informações adicionais" value={info} onChange={this.handleChange}/>
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

        <div className="modal fade" id="sejaparceiro" tabIndex={-1} role="dialog" aria-labelledby="sejaparceiro" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" >Seja um parceiro Datamace e saiba como ampliar seus negócios e fidelizar seus clientes.</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form role="form">
                  <div className="form-group">

                    <input type="text" name="nomeModal" id="nomeModal" placeholder="Digite seu nome" value={nomeModal} onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <input type="text" name="empresaModal" id="empresaModal" placeholder="Digite o nome da empresa" value={empresaModal} onChange={this.handleChange}/>
                  </div>

                  <div className="form-group form-select-div">
                    <div className="form-group-item" style={{ marginRight: '3%' }}>

                      <select name="estadoSelectedModal" id="estadoSelectedModal" onChange={this.handleChangeEstadoModal} value={estadoSelectedModal}>
                        <option disabled value="">Selecione o estado</option>

                        {estados && estados.items && estados.items.map((estado) =>
                          <option value={estado.uf} key={estado.uf}>{estado.nome}</option>

                        )}
                      </select>

                    </div>
                    <div className="form-group-item">

                      <select name="cidadeselectedModal" id="cidadeselectedModal" onChange={this.handleChange} value={cidadeselectedModal}>
                        <option disabled value="">Selecione a cidade</option>
                        {estadoSelectedModal && cidadesmodais && cidadesmodais.items && cidadesmodais.items.map((cidade) =>
                          <option value={cidade.nome} key={cidade.nome}>{cidade.nome}</option>

                        )}
                      </select>
                    </div>
                  </div>




                  <div className="form-group">

                    <input type="email" name="emailModal" id="emailModal" placeholder="Digite seu e-mail" value={emailModal} onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">

                    <input type="text" name="telefoneModal" id="telefoneModal" placeholder="Digite seu telefone para contato" value={telefoneModal} onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">

                    <input type="text" name="infoModal" id="infoModal" placeholder="Informações adicionais" value={infoModal} onChange={this.handleChange}/>
                  </div>
                  {submittedModal &&
                  <div className={"div-alert-login form-group"} style={{margin: 0}}>
                    {alert.message &&
                            <div className={`alert ${alert.type}`}  style={{textAlign: 'center', padding: 0}}>
                                <img src="../public/images/icons/icon-error.svg" className="menu-icon" style={{marginRight: '1%'}}/>
                                <span>{alert.message}</span></div>
                        }
                        </div>
                  }
                </form>
              </div>
              <div className="modal-footer">
                <a >Limpar dados</a>
                <button type="button" className="btn btn-primary" onClick={this.handleSubmitModal}>Enviar</button>
              </div>
            </div>
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

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };