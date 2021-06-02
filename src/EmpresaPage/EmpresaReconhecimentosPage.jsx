import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class EmpresaReconhecimentosPage extends React.Component {
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
                Reconhecimentos                            </h2>
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
                <img alt="O grupo datamace" src="../public/images/empresa-reconhecimento.png" className="rounded" />
              </div>
            </div>

               
            <div className="row div-noticias">
             

              <div className="col-md-12">
               
               
                      <img className="card-img-top" src="../public/images/empresa-top-of-mind.svg" />
                     
                
                 
            </div>
            </div>



            <div className="row div-noticias">
             

             <div className="col-md-12">
              
              
                     <img className="card-img-top" src="../public/images/empresa-reconhecimentos-melhores.svg" />
                    
               
                
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

const connectedEmpresaReconhecimentosPage = connect(mapStateToProps)(EmpresaReconhecimentosPage);
export { connectedEmpresaReconhecimentosPage as EmpresaReconhecimentosPage };