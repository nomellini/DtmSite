import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class EmpresaNossosParceirosPage extends React.Component {
    componentDidMount() {
        // this.props.dispatch(userActions.getAll());
    }

    render() {
        const { user, users } = this.props;
        return (
            <div >

        <div className="row div-sobre-grupo-datamace div-empresa-quem-somos">
              <div className="col-md-6 div-sobre-grupo-datamace-text">
                <h2>
                Nosso parceiros                              </h2>
                <p>
                Conheça a Datamace. A empresa que Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum                </p>
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
                <img alt="O grupo datamace" src="../public/images/empresa-nossos-parceiros1.png" className="rounded" />
              </div>
            </div>

               <div className="row div-sobre-grupo-datamace div-empresa-quem-somos-fundacao">
               <div className="col-md-6 div-sobre-grupo-datamace-text">
</div>
              <div className="col-md-6 div-sobre-grupo-datamace-text">
                
                <p>
                Num mercado globalizado e competitivo, agregar valor ao produto ou serviço é estar preparado para o futuro. Neste sentido a Datamace esta sempre aberta para receber empresas de tecnologia e consultorias, para que juntas possam fornecer soluções criativas e de alto nível para nossos clientes.                </p>
              </div>
              
            </div> 
            <div className="row div-noticias div-nossos-parceiros-icons">
              <div className="div-noticias-header">
                <h4>Nossos parceiros</h4>
              </div>

              <div className="col-md-12">
               
                    <div >
                      <img className="card-img-top" src="../public/images/empresa-nossos-paceiros-servicos.svg" />
                     
                    </div>
                 
                    <div >
                      <img className="card-img-top" src="../public/images/empresa-nossos-parceiros-educacional.svg" />
                      
                    </div>
                
                    <div >
                      <img className="card-img-top" src="../public/images/empresa-nossos-parceiros-publico.svg" />
                     
                  
                </div>
            </div>
            </div>


            <div className="row div-sobre-grupo-datamace div-empresa-quem-somos-fundacao">
               <div className="col-md-6 div-sobre-grupo-datamace-text">
</div>
              <div className="col-md-6 div-sobre-grupo-datamace-text">
                
                <p>
                Além dos processos de melhoria da qualidade, os colaboradores da Datamace são incentivados a desenvolver seu potencial por meio do projeto Estrela. O projeto Estrela trata-se de um programa que reconhece e premia os profissionais que, ao longo de um exercício fiscal investiram na carreira e trouxeram mais conhecimento para a organização.                </p>
              </div>
              
            </div> 

            
            <div className="row div-e-social">
              <div className="col-md-6">
                <h3>
                Junte-se a nós                </h3>
                <button type="button" className="btn btn-success">
                Preencher formulário          
                      </button>
              </div>
              
            </div>




          </div>
          
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedEmpresaNossosParceirosPage = connect(mapStateToProps)(EmpresaNossosParceirosPage);
export { connectedEmpresaNossosParceirosPage as EmpresaNossosParceirosPage };