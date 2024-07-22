import React from "react";
import { Header } from "../../components/header";
import { Container } from "./styles";
import { Quota } from "../../components/quota";

export function DetailsQuota() {
  const itemsOnArray = 11;
  const quotas = Array.from({ length: itemsOnArray }, (_, index) => index + 1);

  function handleClick(event) {
    const quota = event.target.textContent;
    const confirm = window.confirm(`Deseja selecionar a ${quota}?`);
  }

  return (
    <Container>
      <Header title="Detalhes da cota" />

      <main>
        {quotas.map((number, index) => (
          <Quota key={number} index={index} onClick={handleClick} />
        ))}
      </main>
    </Container>
  );
}
