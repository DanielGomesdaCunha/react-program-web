import { imagensCruzeiro } from "@/pages/api/imagensCruzeiro";
import Image from "next/image";

export default function Imagens() {
  return (
    <section id="imagens">
      <div className="container">
        <div className="grid-image">
          {imagensCruzeiro &&
            imagensCruzeiro.map((imagens) => (
              <div className="card bg-light cartao text-dark" key={imagens.id}>
                <Image
                  src={imagens.image}
                  alt={imagens.alt}
                  className="card-img image p-1"
                  width={imagens.largura}
                  height={imagens.altura}
                  quality={75}
                />
                <div className="card-body">
                  <h4 className="card-title text-center">{imagens.title}</h4>
                  <p className="card-text">{imagens.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
