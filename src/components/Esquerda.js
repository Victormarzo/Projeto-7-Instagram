export default function Esquerda(){
    const stories=[
      {img:"assets/img/9gag.svg",
      usuario:"9gagsssss"},
      {img:"assets/img/meowed.svg",
      usuario:"meowed"},
      {img:"assets/img/barked.svg",
      usuario:"barked"},
      {img:"assets/img/nathanwpylestrangeplanet.svg",
      usuario:"nathanwpylestrangeplanet"},
      {img:"assets/img/wawawicomics.svg",
      usuario:"wawawicomics"},
      {img:"assets/img/respondeai.svg",
      usuario:"respondeai"},
      {img:"assets/img/filomoderna.svg",
      usuario:"filomoderna"},
      {img:"assets/img/memeriagourmet.svg",
      usuario:"memeriagourmet"},

    ]
    function Story(props){
      return(
        <div class="story">
          <div class="imagem">
            <img src={props.img} />
          </div>
          <div class="usuario">
            {props.usuario}
          </div>
        </div>
      )
    }
  
      return(
        <div class="esquerda">
          <div class="stories">
            {stories.map(storie=>
              <Story
              img={storie.img}
              usuario={storie.usuario}
              />
              )}

            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>

          <div class="posts">
            <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src="assets/img/meowed.svg" />
                  meowed
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src="assets/img/gato-telefone.svg" />
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
                  <img src="assets/img/respondeai.svg" />
                  <div class="texto">
                    Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                  </div>
                </div>
              </div>
            </div>

            <div class="post">
              <div class="topo">
                <div class="usuario">
                  <img src="assets/img/barked.svg" />
                  barked
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
              </div>

              <div class="conteudo">
                <img src="assets/img/dog.svg" />
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
                  <img src="assets/img/adorable_animals.svg" />
                  <div class="texto">
                    Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}