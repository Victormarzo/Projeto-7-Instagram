export default function Posts(){
    const postInfos=[
        {
          usuarioImg:"assets/img/meowed.svg",
          usuarioNome:"meowed",
          conteudo:"assets/img/gato-telefone.svg",
          curtidoImg:"assets/img/respondeai.svg",
          curtidoNome:"respondeai",
          curtidoNumero:"101.523"
        },
        {
          usuarioImg:"assets/img/barked.svg",
          usuarioNome:"barked",
          conteudo:"assets/img/dog.svg",
          curtidoImg:"assets/img/adorable_animals.svg",
          curtidoNome:"adorable_animals",
          curtidoNumero:"99.159"
        }
      ]
      function Post(props){
        return(
          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.usuarioImg} />
                {props.usuarioNome}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>
  
            <div class="conteudo">
              <img src={props.conteudo} />
            </div>
  
            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>
  
              <div class="curtidas">
                <img src={props.curtidoImg} />
                <div class="texto">
                  Curtido por <strong>{props.curtidoNome}</strong> e <strong>outras {props.curtidoNumero} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        )
      }
    return(
        <div class="posts">
            {postInfos.map(post=><Post
            usuarioImg={post.usuarioImg}
            usuarioNome={post.usuarioNome}
            conteudo={post.conteudo}
            curtidoImg={post.usuarioImg}
            curtidoNome={post.curtidoNome}
            curtidoNumero={post.curtidoNumero}
            />)} 
          </div>
    )
}