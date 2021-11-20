import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { grupoActions } from '../_actions';

class TreinamentoPage extends React.Component {

  constructor(props) {
    super(props);

    this.openCalendario = this.openCalendario.bind(this);

  }

  openCalendario() {
    $('#modalcalendario').modal('show');

    // this.props.dispatch(grupoActions.getAll());
}


    componentDidMount() {
         this.props.dispatch(grupoActions.getAll());
         this.props.dispatch(grupoActions.getCalendario());

    }
    componentDidUpdate(){

      const { user, users,grupos } = this.props;

      
    if(grupos.items){


      let rows = []
      for(let i=0; i< grupos.items.curTreinamentoCategorias.length; i++){
        var categoria = grupos.items.curTreinamentoCategorias[i];
        var selector = `#hs-solucao-home`+categoria.idCategoria;
        const el = document.querySelector(selector);
        if(el){
        const listItems = el.querySelectorAll('li');
        const n = el.children.length;
        var length = grupos.items.curTreinamentos.filter(p => p.idCategoria === categoria.idCategoria).length;
        el.style.setProperty('--total',length );

        if(length ==0){
            const div = document.querySelector(`#row-solucoes`+categoria.idCategoria);
            div.remove();
        }}
      
      }

      
        }

    }

    render() {
        const { user, users,grupos,calendarios } = this.props;


        
        return (
            <div >

        <div className="row div-sobre-grupo-datamace div-empresa-quem-somos">
              <div className="col-md-6 div-sobre-grupo-datamace-text">
                <h2>
                Desenvolvimento Profissional                            </h2>
                <p>
                Conheça a Datamace. A empresa que Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                </p>
              </div>
              <div className="col-md-6 div-sobre-grupo-datamace-img">
              <div className="row footer-redes-sociais">
                  <div className="col-md-4">
                  <img src="../public/images/icon-facebook.svg" />
                  </div>
                  <div className="col-md-4">

                  <img src="../public/images/icon-twitter.svg" />
                  </div>

                  <div className="col-md-4">

                  <img src="../public/images/icon-linkedin.svg" />
                  </div>


                  </div>
                <img alt="O grupo datamace" src="../public/images/treinamentos-image1.png" className="rounded" />
              </div>
            </div>

               <div className="row div-sobre-grupo-datamace div-empresa-quem-somos-fundacao">
               <div className="col-md-6 div-sobre-grupo-datamace-text">
               </div>
              <div className="col-md-6 div-sobre-grupo-datamace-text">
              {/* <h6> Desenvolvimento Pessoal</h6> */}

                <p>
                Com o objetivo focado no desenvolvimento pessoal e profissional dos nossos usuários, a divisão de Treinamento mantém um calendário anual de treinamento, realizado no centro de treinamento da Datamace, onde, todos os cursos são ministrados por instrutores com profundo conhecimento das melhores práticas em Gestão de Pessoas.                </p>
              </div>
              
            </div> 
           
            <div className="row div-e-social div-e-social-servicos-clientes">
              <div className="col-md-6">
                <h3>
                Conheça nosso calendário de treinamentos              </h3>
                <button type="button" className="btn btn-success" onClick={this.openCalendario}>
                Acessar calendário     
                      </button>
              </div>
              
            </div>

             
            <div className="modal fade view-treinamento-calendario" id="modalcalendario" tabIndex={-1} role="dialog" aria-labelledby="sejaparceiro" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">

                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" >Calendário de treinamentos</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                    {calendarios && calendarios.items && calendarios.items.map((calendario)=> 
                        <div key={calendario.dataCalendario}>
                        <h6 className="modal-title" >{calendario.dateFormat}</h6>
<div  className="modal-body-item-day">
                        {calendario && calendario.calendarioTreinamentoEntityChildren && calendario.calendarioTreinamentoEntityChildren.map((item)=> 
                        <div key={item.curTreinamento.idTreinamento} className="modal-body-item">
                          <p>{item.curTreinamento.nome}</p>
                          <span>{item.curTurma.aberta ? "Aberta": "Encerrada"}</span>
                          </div>
                            )}
                                                    </div>
                                                    </div>

                        )}
                    </div>

                   
                  </div>


                </div>

              </div>

            <div  className="div-treinamentos">
            {grupos && grupos.items && grupos.items.curTreinamentoCategorias.map((categoria)=> 
            <div className="row row-solucoes" key={categoria.nomeCategoria} id={`row-solucoes`+categoria.idCategoria}>
            

            <div className="col-md-12" >

            
              <h4 style={{marginLeft: '3%'}}>{categoria.nomeCategoria}</h4>
              {grupos && grupos.error && <span className="text-danger">ERROR: {grupos.error}</span>}

            <div className="div-home-scroll-tabs">
              <div className="hs-solucao-home" style={{padding: '3%'}} id={`hs-solucao-home`+categoria.idCategoria}>


              {grupos && grupos.items && grupos.items.curTreinamentos.filter(p => p.idCategoria === categoria.idCategoria).map((treinamento)=> 
                <div className="" key={treinamento.idTreinamento}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{treinamento.nome}</h5>
                    <p className="card-text">{treinamento.descricao}</p>
                    <a href={`/treinamento-view?idTreinamento=${treinamento.idTreinamento}`}  className="card-link">Saiba mais</a>
                  </div>
                </div>
                </div>
              )}
              </div>
              </div>
              </div>
                                 

            </div>
            )}
 </div>


          </div>
          
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication,grupos,calendarios } = state;
    const { user } = authentication;
    return {
        user,
        users
        ,grupos,
        calendarios
    };
}

const connectedTreinamentoPage = connect(mapStateToProps)(TreinamentoPage);
export { connectedTreinamentoPage as TreinamentoPage };