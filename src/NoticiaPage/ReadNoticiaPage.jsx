import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { noticiaActions } from '../_actions';

import Parser from 'html-react-parser';

import queryString from 'query-string';


class ReadNoticiaPage extends React.Component {
    componentDidMount() { 
s      
       let params = queryString.parse(this.props.location.search)


    //   const { match: { params } } = this.props;

      this.props.dispatch(noticiaActions.get(params.notId));
    }

    render() {
        const { user, users,noticias,anothersnoticias } = this.props;
        let first = null;
        if(noticias.items ){

            first = noticias.items;

       

          
        }

           
        

        return (
            <div >
 {first && first.notImagem &&
<div className="not-read-img">
                              <img src={`https://api.datamace.com.br/StaticFiles/images/noticias/${first.notImagem}`}/>
                              </div>
    }
               {first &&
                              

<div className="row div-sobre-grupo-datamace div-empresa-quem-somos-fundacao div-not-read-content">
               <div className="col-md-6 div-sobre-grupo-datamace-text">
                 <img src="../public/images/icon-voltar.svg"/>
               <a href={`/noticias`}>Voltar para Notícias</a>

</div>
              <div className="col-md-6 div-sobre-grupo-datamace-text">
              <label>{first.notDataCadastroFormat}</label>

              <h3>{first.notTitulo}</h3>
              
              {first.notConteudo && first.notConteudo.indexOf("<p>") !== -1 && Parser(first.notConteudo)}
                {first.notConteudo && first.notConteudo.indexOf("<p>") == -1 && <p>{first.notConteudo}</p>}
              
              </div>
              
            </div> 
    }

      


    
          </div>
          
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication,noticias } = state;
    const { user } = authentication;
    return {
        user,
        users,
        noticias
    };
}

const connectedReadNoticiaPage = connect(mapStateToProps)(ReadNoticiaPage);
export { connectedReadNoticiaPage as ReadNoticiaPage };