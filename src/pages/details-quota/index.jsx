import React from "react";
import { Header } from "../../components/header";
import { Container } from "./styles";
import { Quota } from "../../components/quota";

export function DetailsQuota() {
  const itemsOnArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function handleClick(event) {
    let textTarget = event.target.textContent;

    const confirm = window.confirm(`Deseja selecionar a ${textTarget}?`);
    if (!confirm) return;

    const addUserName = window.prompt(`Qual nome deseja colocar?`);
    if (!addUserName) return;

    textTarget = "Felipe";
  }

  return (
    <Container>
      <Header title="Detalhes da cota" />

      <main>
        {itemsOnArray.map((item, index) => (
          <Quota key={item} index={index} onClick={handleClick} />
        ))}
      </main>
    </Container>
  );
}
