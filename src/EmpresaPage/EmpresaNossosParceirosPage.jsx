import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateSocial } from '../_helpers';
import { estadoActions } from '../_actions';


import { solucaoActions } from '../_actions';

import Parser from 'html-react-parser';

class EmpresaNossosParceirosPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      estadoSelected: '',
      cidadeselected: '',
      estadoSelectedModal: '',
      cidadeselectedModal: ''
    };
    this.handleChangeEstadoModal = this.handleChangeEstadoModal.bind(this);

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

  render() {
    const { user, users, solucaos, estados, cidades } = this.props;
    const { estadoSelectedModal, cidadeselectedModal } = this.state;


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

                    <input type="text" name="nome" id="nome" placeholder="Digite seu nome" />
                  </div>
                  <div className="form-group">
                    <input type="text" name="empresa" id="empresa" placeholder="Digite o nome da empresa" />
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

                    <input type="email" name="email" id="email" placeholder="Digite seu e-mail" />
                  </div>
                  <div className="form-group">

                    <input type="text" name="telefone" id="telefone" placeholder="Digite seu telefone para contato" />
                  </div>
                  <div className="form-group">

                    <input type="text" name="info" id="info" placeholder="Informações adicionais" />
                  </div>

                </form>
              </div>
              <div className="modal-footer">
                <a >Limpar dados</a>
                <button type="button" className="btn btn-primary">Enviar</button>
              </div>
            </div>
          </div>
        </div>

      </div>

    );
  }
}

function mapStateToProps(state) {
  const { users, authentication, solucaos } = state;
  const { user } = authentication;
  return {
    user,
    users,
    solucaos
  };
}

const connectedEmpresaNossosParceirosPage = connect(mapStateToProps)(EmpresaNossosParceirosPage);
export { connectedEmpresaNossosParceirosPage as EmpresaNossosParceirosPage };