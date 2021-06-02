import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { grupoActions } from '../_actions';

import Parser from 'html-react-parser';

import queryString from 'query-string';

import { estadoActions } from '../_actions';
import { cidadeActions } from '../_actions';


class ViewTreinamentoPage extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEstadoModal = this.handleChangeEstadoModal.bind(this);
    this.ClearInputs = this.ClearInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    let params = queryString.parse(this.props.location.search)
       console.log( params)

       this.state = {
        estadoSelectedModal: '',
        cidadeselectedModal: '',
        idTreinamento: params.idTreinamento,
        nome: '',
        empresa: '',
        codigo: '',
        submitted: false
          };

      this.props.dispatch(grupoActions.getBYId(params.idTreinamento));


    
  }


    componentDidMount() { 
      
       

      this.props.dispatch(estadoActions.getAll());


    }


    componentDidUpdate(){
      const { user, users,grupos,anothersgrupos,estados,cidades,cidadesmodais,loading,sucess } = this.props;

      console.log('componentDidUpdate');


      if(sucess){
        $('#sejaparceiro').modal('hide');
        $('#modalmensagem').modal('show');

      }
    }


    handleChange(e) {
      const { name, value } = e.target;
      console.log("handleChange",name,value);
      this.setState({ [name]: value });
  }
  
      handleChangeEstadoModal(e) {
        const { name, value } = e.target;
        console.log("handleChange",name,value);
        this.setState({ [name]: value });

        this.props.dispatch(cidadeActions.GetCidadesByUFModal(value));

    }


    ClearInputs(e) {
      this.setState({
        estadoSelectedModal: '',
        cidadeselectedModal: '',
        nome: '',
        empresa: '',
        codigo: '' 
      });
  }

    handleSubmit(e) {
      e.preventDefault();

      const { idTreinamento,nome,estadoSelectedModal,cidadeselectedModal,empresa,codigo } = this.state;
      const { dispatch } = this.props;
      
    if (idTreinamento && nome && estadoSelectedModal && cidadeselectedModal && empresa ) {
      this.setState({ submitted: true });

          dispatch(grupoActions.FormNotificacaoDisp(idTreinamento,nome,estadoSelectedModal,cidadeselectedModal,empresa,codigo));
          this.setState({ submitted: false});

      }
  }


    render() {
        const { user, users,grupos,anothersgrupos,estados,cidades,cidadesmodais,loading,sucess } = this.props;
        const {estadoSelectedModal,cidadeselectedModal,nome,codigo,empresa,submitted } = this.state;

        let first = null;
        console.log(grupos)
        if(grupos.items && grupos.items.curTreinamentos){
            first = grupos.items.curTreinamentos[0];
         
        }

           


        return (
            <div >

<div className="row view-treinamento-header">
             
              <div className="col-md-12 div-sobre-grupo-datamace-img">
              
                <img alt="O grupo datamace" src="../public/images/treinamentos-image1.png" className="rounded" />
              </div>
            </div>

               {first &&
                              

<div className="row div-sobre-grupo-datamace div-empresa-quem-somos-fundacao div-not-read-content treinamento-read">
               <div className="col-md-6 div-sobre-grupo-datamace-text">
                 <img src="../public/images/icon-voltar.svg"/>
               <a href={`/treinamentos`}>Voltar para Treinamentos</a>

</div>
              <div className="col-md-6 div-sobre-grupo-datamace-text">

              <h3>{first.nome}</h3>
              
              {first.descricao && first.descricao.indexOf("<p>") !== -1 && Parser(first.descricao)}
                {first.descricao && first.descricao.indexOf("<p>") == -1 && <p>{first.descricao}</p>}
              
              </div>
              <div className="col-md-6 div-sobre-grupo-datamace-text">
                

</div>
            <div className="col-md-6 div-informacoes">
<div>
            <span>Duração</span>
            <label>5 dias consecutivos</label>

            </div>
            <div>
            <span>Carga horária</span>

            <label>{first.cargaHoraria}</label>

            </div>

            <div>
            <span>Período</span>

            <label>Integral</label>

            </div>
            <div>
            <span>Valor do Treinamento</span>

            <label>{first.precoFormat}</label>

            </div>

            <div>
            <span>Local do Treinamento</span>

            <a >Ver mapa</a>

            </div>


            </div>

            <div className="col-md-6 div-sobre-grupo-datamace-text">
                </div>

            <div className="col-md-6 div-informacoes-dividir">
            </div>

            <div className="col-md-6 div-sobre-grupo-datamace-text">
                    </div>
            <div className="row div-nav-view-treinamento div-nav-rh">

                    <div className="col-md-12">

                    <div className="div-rh-scroll-tabs">
                    <ul className="nav nav-tabs hs" id="myTab" role="tablist">

                          <li className="nav-item" role="presentation" key="Conteudo">
                            <a className="nav-link" id="Conteudo-tab" data-toggle="tab" href="#Conteudo" role="tab" aria-controls="Conteudo" aria-selected="true">Conteúdo Programático</a>
                          </li>
                          <li className="nav-item" role="presentation" key="Informacao">
                            <a className="nav-link" id="Informacao-tab" data-toggle="tab" href="#Informacao" role="tab" aria-controls="Informacao" aria-selected="true">Infomações Complementares</a>
                          </li>
                          <li className="nav-item" role="presentation" key="Inscricao">
                            <a className="nav-link" id="Inscricao-tab" data-toggle="tab" href="#Inscricao" role="tab" aria-controls="Inscricao" aria-selected="true">Inscrição On-line</a>
                          </li>
                    </ul>

                    </div>

                    <div className="tab-content" id="myTabContent">


                    <div className="tab-pane fade" id="Conteudo" role="tabpanel" aria-labelledby="Conteudo-tab" key="Conteudo">

                    {first.conteudo && first.conteudo.indexOf("<p>") !== -1 && <div className="text-conteudo">{Parser(first.conteudo)}</div>}
                    {first.conteudo && first.conteudo.indexOf("<p>") == -1 && <div className="text-conteudo">{Parser(first.conteudo.replaceAll("\r\n","<br/>"))}</div>}

                    </div>

                    <div className="tab-pane fade" id="Informacao" role="tabpanel" aria-labelledby="Informacao-tab" key="Informacao">

                    {first.sinopse && first.sinopse.indexOf("<p>") !== -1 && <div className="text-conteudo">{Parser(first.sinopse)}</div>}
                    {first.sinopse && first.sinopse.indexOf("<p>") == -1 && <div className="text-conteudo">{Parser(first.sinopse.replaceAll("\r\n","<br/>"))}</div>}

                    </div>

                    <div className="tab-pane fade" id="Inscricao" role="tabpanel" aria-labelledby="Inscricao-tab" key="Inscricao">

                    <h6 className="h6-inscricao"> No momento, não há turmas disponíveis para esse Treinamento.</h6>
                    <div className="div-btn-inscrever" data-toggle="modal" data-target="#sejaparceiro">

                    <button type="submit" className="btn btn-primary">
                    Avise-me quando houver turmas disponíveis
                      </button>
                    </div>



                    
                    <div className="modal fade view-treinamento" id="modalmensagem" tabIndex={-1} role="dialog" aria-labelledby="sejaparceiro" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">

                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" >Formulário enviado com sucesso!</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                    <a href="/treinamentos">Voltar para o treinamento</a>

                    </div>

                   
                  </div>


                </div>

              </div>



                    <div className="modal fade view-treinamento" id="sejaparceiro" tabIndex={-1} role="dialog" aria-labelledby="sejaparceiro" aria-hidden="true">
                <div className="modal-dialog" role="document">

                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" >Preencha o formulário e seja avisado quando houver turmas disponíveis</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                    <form role="form" onSubmit={this.handleSubmit}>
                      <div className="form-group">
                       

                        <input type="text" name="nome"  id="nome" placeholder="Digite seu nome" value={nome} onChange={this.handleChange} disabled={submitted} />
                      </div>

                      <div className="form-group form-select-div">
                          <div className="form-group-item" style={{marginRight: '3%'}}>

                          <select name="estadoSelectedModal" id="estadoSelectedModal" onChange={this.handleChangeEstadoModal} value={estadoSelectedModal} disabled={submitted}>
                            <option disabled value="">Selecione o estado</option>

                            {estados && estados.items && estados.items.map((estado)=> 
                                  <option value={estado.uf} key={estado.uf}>{estado.nome}</option>
                            
                            )}
                          </select>

                        </div>
                        <div className="form-group-item">

                        <select name="cidadeselectedModal" id="cidadeselectedModal" onChange={this.handleChange} value={cidadeselectedModal} disabled={submitted}>
                          <option disabled value="">Selecione a cidade</option>
                          {estadoSelectedModal && cidadesmodais && cidadesmodais.items && cidadesmodais.items.map((cidade)=> 
                                  <option value={cidade.nome} key={cidade.nome}>{cidade.nome}</option>
                            
                            )}
                          </select>
                          </div>
                     </div>

                      


                    <div className="form-group">
                       
                    <input type="text" name="empresa"  id="empresa" placeholder="Digite o nome da sua empresa" value={empresa} onChange={this.handleChange} disabled={submitted}/>
                     </div>
                     <div className="form-group">
                       
                       <input type="text" name="codigo"  id="codigo" placeholder="Digite o código da empresa" value={codigo} onChange={this.handleChange} disabled={submitted}/>
                     </div>
                    
                    </form>
                    </div>

                    <div className="modal-footer">
                      <a onClick={this.ClearInputs} disabled={submitted}>Limpar dados</a>
                      <button type="submit" onClick={this.handleSubmit} className="btn btn-primary" disabled={submitted}>Enviar
                      {loading &&                             <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
}
                      </button>
                    </div>
                  </div>


                </div>

              </div>


                    </div>



                    </div> 


                    </div>
                </div>
            
            
            </div> 
    }

      


    
          </div>
          
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication,grupos, estados,cidades,cidadesmodais } = state;
    const { loading,sucess,error } = state.gruporegister;
    const { user } = authentication;
    return {
        user,
        users,
        grupos,
        estados,cidades,cidadesmodais,loading,sucess,error

    };
}

const connectedViewTreinamentoPage = connect(mapStateToProps)(ViewTreinamentoPage);
export { connectedViewTreinamentoPage as ViewTreinamentoPage };