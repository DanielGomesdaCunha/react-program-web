import Image from "next/image";

export default function About() {
  return (
    <section id="sobre">
      <div className="container">
        <div className="row">
          <div className="col p-3">
            <div className="imagem text-center">
              <Image
                src="/Image/cruzeiro-alto-mar.webp"
								alt="Cruzeiro em alto mar"
								className="img"
								width={640}
								height={429}
								quality={75}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col p-3">
            <div className="info text-center">
              <h3 className="text-center">Quem somos nós?</h3>
						  <br />
							<p>Somos a maior empresa especializada em viagens marítimas em toda a América Latina.</p>
							<p>A nossa missão é fazer uma viagem em todo o mundo para que você possa conhecer diversos países e diversas culturas. <br />
							Estamos dispostos a fazer a maior segurânça para que todos os passageiros possam se sentir seguros durante a viagem. <br /> Utilizamos tecnologia de última geração para monitorar a atividade dos oceanos para fazer um trajeto mais seguro. <br />
							Temos um navio muito grande e espaçoso para que mais pessoas possam se sentir em casa, as cabines são muito aconchegante para está em um ambiente familiar, área de lazer para se divertir com a família e amigos, nosso restaurante para saborear a nossa culinária.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}