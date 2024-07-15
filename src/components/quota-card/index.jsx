import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { BannerImage } from "./styles";
import { Description } from "./styles";

export function QuotaCard({ name, srcImg, price }) {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/details");
  }

  return (
    <Container >
      <BannerImage>
        <img src={srcImg} alt="foto do prêmio" />
      </BannerImage>
      <h2>Rifa {name}</h2>
      <Description>
        <div className="container-text">
          <p>Rifa de um carro 0km</p>
        </div>

        <div className="container-button">
          <button onClick={handleNavigate}>Entrar</button>
          <span id="price">R$: {price ? price : "0,00"}</span>
        </div>
      </Description>
    </Container>
  );
}
