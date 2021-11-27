import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateSocial } from '../_helpers';

import { solucaoActions } from '../_actions';

import Parser from 'html-react-parser';

class LgpdResponsavel extends React.Component {
    componentDidMount() {
      this.props.dispatch(solucaoActions.GetTbSolucaoBYSlug("Encarregado de Proteção de Dados (EPD) ou DPO"));
    }

    componentDidUpdate(){

      updateSocial();

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

const connectedLgpdResponsavel = connect(mapStateToProps)(LgpdResponsavel);
export { connectedLgpdResponsavel as LgpdResponsavel };