import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { solucaoActions } from '../_actions';

import Parser from 'html-react-parser';

class EmpresaPoliticaQualidadePage extends React.Component {
    componentDidMount() {
      this.props.dispatch(solucaoActions.GetTbSolucaoBYSlug("Política de qualidade"));
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

const connectedEmpresaPoliticaQualidadePage = connect(mapStateToProps)(EmpresaPoliticaQualidadePage);
export { connectedEmpresaPoliticaQualidadePage as EmpresaPoliticaQualidadePage };