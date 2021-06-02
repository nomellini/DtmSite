import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import { noticiaActions } from '../_actions';
import Parser from 'html-react-parser';

class NoticiaPage extends React.Component {
    componentDidMount() { 
        this.props.dispatch(noticiaActions.getAll());
    }

    render() {
        const { user, users,noticias } = this.props;
        var first = null;
        var segunda = null;
        var terceira = null;
        var anothersnoticias = null;
        if(noticias.items){
          if(noticias.items.length > 0){

            first = noticias.items[0];
            if(noticias.items.length > 1){
            segunda = noticias.items[1];
            }
            if(noticias.items.length > 2){
            terceira = noticias.items[2];
          }

          anothersnoticias = noticias.items.filter( function (noticia,index) {
            return index > 2
          });

          
        }

           
        }

        return (
            <div >

          <div className="row div-noticias-topo">
          {first &&
          <div className="col-md-7 div-noticias-topo-large">
            
            <label>{first.notDataCadastroFormat}</label>
            <h3>{first.notTitulo}</h3>
            {first.notImagem &&
             <div className="div-image-large"> 
        

                      <img src={`https://api.datamace.com.br/StaticFiles/images/noticias/${first.notImagem}`}/>
                      </div>
             }
              {!first.notImagem &&
             <div className="div-image-large"> 
        

                      <img src="public\images\noticia-1.png"/>
                      </div>
             }

{Parser(first.notResenha)}
            <Link to={`/noticia-read?notId=${first.notId}`}>Continuar lendo</Link >
                        </div>
                }
                        <div className="col-md-5 div-noticias-topo-small">
                          {segunda &&
                          <div>
                      <a href={`/noticia-read?notId=${segunda.notId}`}>
                      <label>{segunda.notDataCadastroFormat}</label>
                        <h3>{segunda.notTitulo}</h3>
                        {segunda.notImagem &&
                        <div className="div-image-small"> 
                       
                          <img src={`https://api.datamace.com.br/StaticFiles/images/noticias/${segunda.notImagem}`}/>
                        </div>
                        }
                        {!segunda.notImagem &&
             <div className="div-image-small"> 
        

                      <img src="public\images\noticia-1.png"/>
                      </div>
             }

                        </a>
                        </div>
                    }

                  {terceira &&
                  <div>
                      <a href={`/noticia-read?notId=${terceira.notId}`}>
                      <label>{terceira.notDataCadastroFormat}</label>
                        <h3>{terceira.notTitulo}</h3>
                        {terceira.notImagem &&

                        <div className="div-image-small"> 
                          <img src={`https://api.datamace.com.br/StaticFiles/images/noticias/${terceira.notImagem}`}/>
                        </div>
             }

                        {!terceira.notImagem &&
             <div className="div-image-small"> 
        

                      <img src="public\images\noticia-1.png"/>
                      </div>
             }

                        </a>
                        </div>
                    }
                      </div>
            </div>


            <div className="row div-noticias-list">

<div className="col-md-5 div-noticias-list-column-small">
</div>

              <div className="col-md-7 div-noticias-list-column-large">
              {anothersnoticias  && anothersnoticias.map((noticia)=>
              <div className="item-noticia" key={noticia.notId}>
                <label>{noticia.notDataCadastroFormat}</label>
                <h3>{noticia.notTitulo}</h3>
                
                {noticia.notResenha.indexOf("<p>") !== -1 && Parser(noticia.notResenha)}
                {noticia.notResenha.indexOf("<p>") == -1 && <p>{noticia.notResenha}</p>}
                <a href={`/noticia-read?notId=${noticia.notId}`}>Continuar lendo</a>
               </div>
                        )}


            </div>
           </div>
    
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

const connectedNoticiaPage = connect(mapStateToProps)(NoticiaPage);
export { connectedNoticiaPage as NoticiaPage };