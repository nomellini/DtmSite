import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateSocial } from '../_helpers';


import { solucaoActions } from '../_actions';

import Parser from 'html-react-parser';

class EmpresaReconhecimentosPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(solucaoActions.GetTbSolucaoBYSlug("Reconhecimentos"));
      }
      componentDidUpdate(){

        updateSocial();

        fetch('/public/images/empresa-top-of-mind.svg')
          .then(response => response.text())
          .then((data) => {
            $("#empresa-top-of-mind").html(data);
          })

          fetch('/public/images/empresa-reconhecimentos-melhores.svg')
          .then(response => response.text())
          .then((data) => {
            $("#empresa-reconhecimentos-melhores").html(data);
          })
  
      }
      render() {
        const { user, users,solucaos } = this.props;
        return (
            <div >
  
              {solucaos && solucaos.items && solucaos.items.map((solucao)=> 
              
                <div key='0'>{Parser(solucao.conteudo)}</div>
  
        
  
            )}
  
          </div>

          
          
          );
      }
  }
  
  function mapStateToProps(state) {
      const { users, authentication,solucaos } = state;
      const { user } = authentication;
      return {
          user,
          users,
          solucaos
      };
  }

const connectedEmpresaReconhecimentosPage = connect(mapStateToProps)(EmpresaReconhecimentosPage);
export { connectedEmpresaReconhecimentosPage as EmpresaReconhecimentosPage };