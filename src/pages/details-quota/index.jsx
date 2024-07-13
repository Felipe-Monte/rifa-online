import { createElement } from "react";
import { Header } from "../../components/header";
import { Container } from "./styles";
import { Quota } from "../../components/quota";

export function DetailsQuota() {
  const number = 50;
  const quotas = Array.from({ length: number }, (_, index) => index + 1);

  return (
    <Container>
      <Header title="Detalhes da cota" />
      <main>
        <h2>Cota 1</h2>
        <p>Selecione quantas cotas você quiser!</p>

        <div className="container-quota">
          {quotas.map((number) => (
            <Quota key={number} number={number} />
          ))}
        </div>
      </main>
    </Container>
  );
}
