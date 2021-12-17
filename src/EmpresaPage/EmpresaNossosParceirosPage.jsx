import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateSocial } from '../_helpers';
import { estadoActions } from '../_actions';


import { solucaoActions } from '../_actions';
import { mailcontroleActions } from '../_actions';

import Parser from 'html-react-parser';

class EmpresaNossosParceirosPage extends React.Component {
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
    };
    this.handleChangeEstadoModal = this.handleChangeEstadoModal.bind(this);
    this.handleSubmitModal = this.handleSubmitModal.bind(this);
    this.ClearInputs = this.ClearInputs.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    const { name, value } = e.target;
   
    this.setState({ [name]: value });
  }
  componentDidMount() {
    this.props.dispatch(solucaoActions.GetTbSolucaoBYSlug("Nosso parceiros"));

  }
  componentDidUpdate() {

    updateSocial();
    this.props.dispatch(estadoActions.getAll());

  }

  handleChangeEstadoModal(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });

    this.props.dispatch(cidadeActions.GetCidadesByUFModal(value));

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
    const { user, users, solucaos, estados, cidades ,alert} = this.props;
    const { estadoSelectedModal, cidadeselectedModal,nomeModal,empresaModal,emailModal,telefoneModal,infoModal } = this.state;


    return (
      <div >

        {solucaos && solucaos.items && solucaos.items.map((solucao) =>

          <div key='0'>{Parser(solucao.conteudo)}</div>



        )}


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
  const { users, authentication, solucaos,alert } = state;
  const { user } = authentication;
  return {
    user,
    users,
    solucaos,
    alert
  };
}

const connectedEmpresaNossosParceirosPage = connect(mapStateToProps)(EmpresaNossosParceirosPage);
export { connectedEmpresaNossosParceirosPage as EmpresaNossosParceirosPage };