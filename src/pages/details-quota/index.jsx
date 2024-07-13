import { createElement } from "react";
import { Header } from "../../components/header";
import { Container } from "./styles";
import { Quota } from "../../components/quota";

export function DetailsQuota() {
  return (
    <Container>
      <Header title="Detalhes da cota" />
      <main>
        <h2>Cota 1</h2>
        <p>Selecione quantas cotas você quiser!</p>

        <div className="container-quota">
          <Quota number="1" />
          <Quota number="2" />
          <Quota number="3" />
        </div>
      </main>
    </Container>
  );
}
