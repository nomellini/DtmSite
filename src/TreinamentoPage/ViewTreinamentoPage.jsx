import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { grupoActions } from '../_actions';

import Parser from 'html-react-parser';

import queryString from 'query-string';

import { estadoActions } from '../_actions';
import { cidadeActions } from '../_actions';


import InputMask from 'react-input-mask';


class ViewTreinamentoPage extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEstadoModal = this.handleChangeEstadoModal.bind(this);
    this.ClearInputs = this.ClearInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitInscricao = this.handleSubmitInscricao.bind(this);
    this.onClickCardTurma = this.onClickCardTurma.bind(this);
    this.setPreencherForm = this.setPreencherForm.bind(this);
    this.setPreencherLogin = this.setPreencherLogin.bind(this);
    this.continuarStep1 = this.continuarStep1.bind(this);
    this.continuarStep2 = this.continuarStep2.bind(this);
    this.confirmarInscricao = this.confirmarInscricao.bind(this);
    this.handleOnChangeCheckBox = this.handleOnChangeCheckBox.bind(this);
    
    
    
    let params = queryString.parse(this.props.location.search)

       this.state = {
        estadoSelectedModal: '',
        cidadeselectedModal: '',
        idTreinamento: params.idTreinamento,
        nome: '',
        empresa: '',
        codigo: '',
        submitted: false,
        turmaSelected: null,
        CPF: '',
        modeLogin: true,
        msgerroLogin: '',
        step: '1'    ,        telefone:'',cargo:'',email:'' ,aceitepagamento: false,  modulos: [],


      };

      this.props.dispatch(grupoActions.getBYId(params.idTreinamento));


    
  }




    componentDidMount() { 
      
       

      this.props.dispatch(estadoActions.getAll());


    }

    onClickCardTurma(item){
        this.setState({ turmaSelected: item,submitted: false,msgerroLogin: '',CPF: '',modeLogin: true });


    }


    componentDidUpdate(){
      const { user, users,grupos,anothersgrupos,estados,cidades,cidadesmodais,loading,sucess } = this.props;



      if(sucess){
        $('#sejaparceiro').modal('hide');
        $('#inscricaoonline').modal('hide');
        $('#modalmensagem').modal('show');
        
      }
    }


    handleChange(e) {
      const { name, value } = e.target;
      this.setState({ [name]: value,submitted: false, msgerroLogin: ''});
  }
  
      handleChangeEstadoModal(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });

        this.props.dispatch(cidadeActions.GetCidadesByUFModal(value));

    }


    ClearInputs(e) {
      this.setState({
        estadoSelectedModal: '',
        cidadeselectedModal: '',
        nome: '',
        empresa: '',
        codigo: '',
        CPF: '',
        telefone:'',cargo:'',email:'' ,aceitepagamento: false,modulos: []
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

  continuarStep1(){

    const { idTreinamento,nome,estadoSelectedModal,cidadeselectedModal,empresa,codigo,telefone,cargo,email,CPF} = this.state;

    const { dispatch } = this.props;

    this.setState({ submitted: true });
      
    if (codigo && CPF && nome && email) {
      this.setState({ step: '2' });
      this.setState({ submitted: false });
  
  }

  }

  continuarStep2(){

    this.setState({ step: '3' });

  }

  setPreencherForm(){
    this.setState({ modeLogin: false,submitted: false, step: '1'    });
    

  }

  setPreencherLogin(){
    this.setState({ modeLogin: true,submitted: false,step: '1'     });

  }

  confirmarInscricao(e){
    
    // if(sucess){
    //   $('#sejaparceiro').modal('hide');
    //   $('#modalmensagem').modal('show');

    // }

    e.preventDefault();

      const { idTreinamento,nome,estadoSelectedModal,cidadeselectedModal,empresa,codigo,telefone,cargo,email,aceitepagamento,modulos,CPF} = this.state;
      const { dispatch } = this.props;
      this.setState({ submitted: true });
      if (idTreinamento && nome && estadoSelectedModal && cidadeselectedModal && codigo && CPF && modulos) {

      dispatch(grupoActions.Inscrever(idTreinamento,nome,estadoSelectedModal,cidadeselectedModal,codigo,email,CPF,telefone,cargo,aceitepagamento,modulos));
      this.setState({ submitted: false});

      }


  }

  handleSubmitInscricao(e) {
    e.preventDefault();

    const { CPF } = this.state;
    const { dispatch } = this.props;



  if (CPF) {
    this.setState({ submitted: true });
    this.setState({ msgerroLogin: 'CPF não encontrado'});

    // dispatch(grupoActions.FormNotificacaoDisp(idTreinamento,nome,estadoSelectedModal,cidadeselectedModal,empresa,codigo));
    // this.setState({ submitted: false});

    }
}

handleOnChangeCheckBox = (id) => {

  let selected = this.state.modulos
  // instead of using indexOf, we can use findIndex to look through array of objects
  let find = selected.findIndex(item => item === id)

  if(find > -1) {
    selected.splice(find, 1)
  } else {
    // We can use find to get the item based on its id
    selected.push(this.state.turmaSelected.curTurmas.find(item => item.curTurma.idTurma === id).curTurma.idTurma)
  }

  this.setState({ modulos: selected });
  // setCheckedState(updatedCheckedState);

 
};

    render() {
        const { user, users,grupos,anothersgrupos,estados,cidades,cidadesmodais,loading,sucess } = this.props;
        const {estadoSelectedModal,cidadeselectedModal,nome,codigo,empresa,submitted,turmaSelected,CPF,msgerroLogin,modeLogin,step,telefone,cargo,email,aceitepagamento } = this.state;



        let first = null;
        let curTurmas = null;
        var sefThis = this;
        if(grupos.items && grupos.items.curTreinamentos){
            first = grupos.items.curTreinamentos[0];
            if( grupos.items.curTurmas && grupos.items.curTurmas.length > 0 )
            curTurmas = grupos.items.curTurmas;
        }

           


        return (
            <div >

<div className="row view-treinamento-header">
             
              <div className="col-md-12 div-sobre-grupo-datamace-img">
              
                <img alt="O grupo datamace" src="../public/images/treinamentos-image1.png" className="rounded" />
              </div>
            </div>

               {first &&
                              

<div className="row div-sobre-grupo-datamace div-empresa-quem-somos-fundacao treinamento-read">
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
{!curTurmas && 
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
               }
{curTurmas &&
<div className="tab-pane fade" id="Inscricao" role="tabpanel" aria-labelledby="Inscricao-tab" key="Inscricao" >
<h6 className="h6-inscricao"> Selecione a turma que você deseja fazer parte</h6>

{curTurmas && curTurmas.map((item,index)=> 
                        <div key={index} className="item-turma-inscricao" onClick={function () {sefThis.onClickCardTurma(item)}} data-toggle="modal" data-target="#inscricaoonline">
                          <div className="turma-periodo-div">
                              <div>
                                <label>Turma</label>
                                <p>{item.curTurmaGrupo}</p>
                            </div>
                            <div>
                                <label>Período</label>
                                <p>{item.periodo} Dias</p>
                            </div>
                        </div>
                        <div className="div-cronograma">
                        <label>Cronograma</label>
                        {item.curTurmas && item.curTurmas.map((cur,index)=> 
                         <p key={index}><b>Módulo {cur.curTurma.modulo}</b> - {cur.curTurma.dataInicioFormat} - {cur.curTurma.horaInicioFormat} às {cur.curTurma.horaFinalFormat} </p>
                        )}

                        </div>
                        </div>

                          )}
						  

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
              

              <div className="modal fade view-treinamento" id="inscricaoonline" tabIndex={-1} role="dialog" aria-labelledby="inscricaoonline" aria-hidden="true">
              {modeLogin && 

                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" className="btn-close">×</span>
                      </button>
                    <div className="modal-header">
                      <h5 className="modal-title" >Inscreva-se para a turma {turmaSelected && turmaSelected.curTurmaGrupo}</h5>
                      
                    </div>
                   
                    <div className="modal-body">
                    <form role="form" onSubmit={this.handleSubmit}>
                    <div className="input-group-register">
                    <div style={{display: 'inline'}}>
                        <input type="radio" name="optlogin" value="true" id="cliente" defaultChecked />
                        <label htmlFor="cliente" className="label-regiter-radio">Sou Cliente</label>
                        <input type="radio" name="optlogin" value="false" id="desenvolvedor" style={{marginLeft: '5%'}}  />
                        <label htmlFor="desenvolvedor" className="label-regiter-radio">Sou desenvolvedor</label>
                        <input type="radio" name="optlogin" value="false" id="pessoa" style={{marginLeft: '5%'}}  />
                        <label htmlFor="pessoa" className="label-regiter-radio">Sou pessoa física</label>
                       </div>
                       </div>

                       <div className={'input-group' + (submitted && !CPF ? ' has-error' : '')}>
                        <label htmlFor="Email" className="input-label">CPF</label>
                        <InputMask mask="999.999.999-99" maskChar="" placeholder="XXX.XXX.XXX-XX" type="text" className="input-text" name="CPF" value={CPF} onPaste={this.handleChange} onInput={this.handleChange} onChange={this.handleChange} placeholder="Digite seu CPF"/>
                        {submitted && !CPF &&
                            <div className="help-block">Informe seu CPF</div>
                        }
                    </div>
                    
                    </form>
                    </div>

                    <div className="modal-footer">
                      <div className="msg-erro">
                      {submitted && msgerroLogin && <div>
                        
                        <img src="../../public/images/icon-alert.svg" />
                        <span className="error">{msgerroLogin}</span></div>}
                      </div>
                      <div className="div-btn-submit">
                      <button type="submit" onClick={this.handleSubmitInscricao} className="btn btn-primary btn-inscricao-login" disabled={submitted}>Entrar
                      {loading &&                             <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
}
                      </button>
                      </div>
                     
                      <div>

                      {submitted && msgerroLogin && 
                      <div className="div-preecher-form">
                      <a className="link" onClick={this.setPreencherForm}>Preencher formulário para continuar inscrição</a>
                      <img src="../../public/images/icon-avancar-inscricao.svg"/>
                      </div>
                      }
                      </div>

                    </div>
                  </div>


                </div>
    }

    {!modeLogin &&  step && step == '1'  &&  <div className="modal-dialog modal-dialog-centered" role="document">

<div className="modal-content">
<button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" className="btn-close">×</span>
                      </button>
  <div className="modal-header">
    

    <img src="../../public/images/onboarding-part1.svg" className="svg-onboarding"/>


    <h5 className="modal-title" >Preencha o formulário e continue sua inscrição para a turma {turmaSelected && turmaSelected.curTurmaGrupo}</h5>

  </div>
  <div className="modal-body">
  <form role="form" onSubmit={this.handleSubmit}>
    <div className={'form-group' + (submitted && !CPF ? ' has-error' : '')}>
     

      <input className="form-preencher" type="text" name="nome"  id="nome" placeholder="Digite seu nome" value={nome} onChange={this.handleChange}  />
      {submitted && !nome &&
                            <div className="help-block">Informe seu Nome</div>
                        }
    </div>

    <div className="form-group form-m2">
     
    <div className={'form-group-item' + (submitted && !CPF ? ' has-error' : '')} style={{marginRight: '3%'}}>

    <InputMask mask="999.999.999-99" maskChar="" placeholder="XXX.XXX.XXX-XX" type="text" name="CPF" value={CPF} onPaste={this.handleChange} onInput={this.handleChange} onChange={this.handleChange} placeholder="Digite seu CPF"/>
    {submitted && !CPF &&
                            <div className="help-block">Informe seu CPF</div>
                        }
    </div>

    <div className={'form-group-item' + (submitted && !CPF ? ' has-error' : '')}>

     <input  type="email" name="email"  id="email" placeholder="Digite seu e-mail" value={email} onChange={this.handleChange}  />
     {submitted && !email &&
                            <div className="help-block">Informe seu E-mail</div>
                        }
     </div>
   </div>


   <div className="form-group form-m2">

   <div className="form-group-item">
 
 <input  type="text" name="cargo"  id="cargo" placeholder="Digite seu cargo" value={cargo} onChange={this.handleChange}  />
 </div>

     
     <div className="form-group-item" style={{marginRight: '3%'}}>
 
     <InputMask mask="(99) 99999-9999" maskChar="" placeholder="(XX) XXXXX-XXXX" type="text" name="telefone" value={telefone} onPaste={this.handleChange} onInput={this.handleChange} onChange={this.handleChange} placeholder="Digite seu telefone"/>
     </div>
 
     
    </div>

    <div className="form-group form-select-div">
        <div className="form-group-item" style={{marginRight: '3%'}}>

        <select name="estadoSelectedModal" id="estadoSelectedModal" onChange={this.handleChangeEstadoModal} value={estadoSelectedModal} >
          <option disabled value="">Selecione o estado</option>

          {estados && estados.items && estados.items.map((estado)=> 
                <option value={estado.uf} key={estado.uf}>{estado.nome}</option>
          
          )}
        </select>

      </div>
      <div className="form-group-item">

      <select name="cidadeselectedModal" id="cidadeselectedModal" onChange={this.handleChange} value={cidadeselectedModal} >
        <option disabled value="">Selecione a cidade</option>
        {estadoSelectedModal && cidadesmodais && cidadesmodais.items && cidadesmodais.items.map((cidade)=> 
                <option value={cidade.nome} key={cidade.nome}>{cidade.nome}</option>
          
          )}
        </select>
        </div>
   </div>

   <div className={'form-group' + (submitted && !CPF ? ' has-error' : '')}>
     
     <input className="form-preencher" type="text" name="codigo"  id="codigo" placeholder="Digite o código da empresa" value={codigo} onChange={this.handleChange} />
     {submitted && !codigo &&
                            <div className="help-block">Informe seu Código da empresa</div>
                        }
   </div>
  
  </form>
  </div>

  <div className="modal-footer modal-footer-preencher-form">
    <a onClick={this.ClearInputs} >Limpar dados</a>
    <button type="submit" onClick={this.continuarStep1} className="btn btn-primary btn-inscricao-from" >Continuar
    {loading &&                             <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
}
    </button>


                    

  </div>
  <div className="modal-link">
  <img src="../../public/images/prencher-login.svg" onClick={this.setPreencherLogin} className="link-prencher-login"/>

  </div>
</div>


</div>

    }

{!modeLogin &&  step && step == '2'  &&  <div className="modal-dialog modal-dialog-centered" role="document">

<div className="modal-content">
<button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" className="btn-close">×</span>
                      </button>
  <div className="modal-header">
    

    <img src="../../public/images/onboarding-part2.svg" className="svg-onboarding"/>


    <h5 className="modal-title" >Selecione os módulos da turma {turmaSelected && turmaSelected.curTurmaGrupo} que você deseja participar</h5>

  </div>
  <div className="modal-body">
  <form role="form" onSubmit={this.handleSubmit}>
    <div className="form-group">

    {turmaSelected.curTurmas && turmaSelected.curTurmas.map((cur,index)=> 
        <div className="item-turmas-div"  key={index}>
        <input id={`modulos-checkbox-${index}`} name={cur.curTurma.modulo} type="checkbox"
        value={cur.curTurma.idTurma}
        onChange={() => this.handleOnChangeCheckBox(cur.curTurma.idTurma)}/>

          <p key={index}><b>Módulo {cur.curTurma.modulo}</b> - {cur.curTurma.dataInicioFormat} - {cur.curTurma.horaInicioFormat} às {cur.curTurma.horaFinalFormat} </p>
        </div>
                        )}
     
</div>
  
  </form>
  </div>

  <div className="modal-footer modal-footer-preencher-form">
    <button type="submit" onClick={this.continuarStep2} className="btn btn-primary btn-inscricao-from" >Continuar
    {loading &&                             <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
}
    </button>


                    

  </div>
  <div className="modal-link">
  <img src="../../public/images/prencher-login.svg" onClick={this.setPreencherLogin} className="link-prencher-login"/>

  </div>
</div>


</div>

    }

{!modeLogin &&  step && step == '3'  &&  <div className="modal-dialog modal-dialog-centered" role="document">

<div className="modal-content">
<button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" className="btn-close">×</span>
                      </button>
  <div className="modal-header">
    

    <img src="../../public/images/onboarding-part3.svg" className="svg-onboarding"/>


    <h5 className="modal-title" >Confirme sua inscrição para a turma {turmaSelected && turmaSelected.curTurmaGrupo}</h5>

  </div>
  <div className="modal-body">
  <form role="form" onSubmit={this.handleSubmit}>
    <div className="form-group div-confirmar-pagamento">

<div>
    <input type="radio" name="aceitepagamento" value="true" id="aceito" onChange={this.handleChange}/>
    <label htmlFor="aceito" className="label-regiter-radio">Aceito as condições de pagamento.</label>

</div>
<div>

     <input type="radio" name="aceitepagamento" value="false" id="notaceito" defaultChecked onChange={this.handleChange}/>
     <label htmlFor="notaceito" className="label-regiter-radio">Não aceito as condições de pagamento.</label>
     
     </div>
</div>
  
  </form>
  </div>

  <div className="modal-footer modal-footer-preencher-form">
    <button type="submit" onClick={this.confirmarInscricao} className="btn btn-primary btn-inscricao-from" disabled={submitted}>Confirmar
    {loading &&  <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
}
    </button>


                    

  </div>
  <div className="modal-link">
  <img src="../../public/images/prencher-login.svg" onClick={this.setPreencherLogin} className="link-prencher-login"/>

  </div>
</div>


</div>

    }


              </div>



</div> 
    }


    
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