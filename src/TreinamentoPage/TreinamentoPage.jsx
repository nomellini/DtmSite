import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { grupoActions } from '../_actions';

class TreinamentoPage extends React.Component {
    componentDidMount() {
         this.props.dispatch(grupoActions.getAll());
    }
    componentDidUpdate(){
      console.log("componentDidUpdate");

      const { user, users,grupos } = this.props;

      
    if(grupos.items){


      let rows = []
      for(let i=0; i< grupos.items.curTreinamentoCategorias.length; i++){
        var categoria = grupos.items.curTreinamentoCategorias[i];
        var selector = `#hs-solucao-home`+categoria.idCategoria;
        const el = document.querySelector(selector);
        // console.log(selector,categoria.idCategoria,el)
        const listItems = el.querySelectorAll('li');
        const n = el.children.length;
        var length = grupos.items.curTreinamentos.filter(p => p.idCategoria === categoria.idCategoria).length;
        el.style.setProperty('--total',length );

        if(length ==0){
            const div = document.querySelector(`#row-solucoes`+categoria.idCategoria);
            div.remove();
        }
      
      }

      
        }

    }

    render() {
        const { user, users,grupos } = this.props;
    console.log(grupos)


        
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
                <button type="button" className="btn btn-success">
                Acessar calendário     
                      </button>
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
    const { users, authentication,grupos } = state;
    const { user } = authentication;
    return {
        user,
        users
        ,grupos
    };
}

const connectedTreinamentoPage = connect(mapStateToProps)(TreinamentoPage);
export { connectedTreinamentoPage as TreinamentoPage };