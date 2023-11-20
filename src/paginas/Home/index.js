import React from "react";
import Header from "../../componentes/Header";
import Footer from "../../componentes/Footer";
import "./style.css";

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <section className="banner">
          <h1>SORVETE ARTESANAL</h1>
        </section>

        <section className="flavours">
          <div className="container">
            <div className="flavoursImage">
              <img src="./assets/banner-sabores.jpg"></img>
            </div>

            <div className="flavoursText">
              <h2>NOSSOS SABORES</h2>
              <h3>Novos e deliciosos!</h3>
              <p>
                Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
                gelateria todos os nossos produtos são naturais, à base de
                frutas e sem nenhum conservante! Também temos opções sem lactose
                e sem açúcar. Venha conhecer e perceber que tem como o sorvete
                ser delicioso e saudável ao mesmo tempo!
              </p>
            </div>
          </div>
        </section>

        <section className="events">
          <div className="container">
            <div className="eventsText">
              <h2>NOSSOS EVENTOS</h2>
              <h3>Delícias com sorvete!</h3>
              <p>
                Mais do que uma sorveteria, uma extensão da sua casa! Estamos
                aqui prontinhos para te atender e oferecer os melhores eventos
                com os melhores sorvete da sua vida! Venha nos conhecer e passar
                um tempo aqui com a gente.
              </p>
            </div>
            <div className="eventsImage">
              <img src="./assets/eventos-image.jpg"></img>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <div className="aboutImage">
              <img src="./assets/sobre-image.jpg"></img>
            </div>
            <div className="aboutText">
              <h2>SOBRE NÓS</h2>
              <h3>Alegria em cada casquinha!</h3>
              <p>
                Venha tomar o melhor sorvete da região aqui com a gente! Nós
                estamos há anos no mercado produzindo o que tem de melhor para o
                nosso cliente e você não pode ficar fora dessa. Venha nos fazer
                uma visita e aproveite o melhor atendimento e o melhor sorvete
                da cidade.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
