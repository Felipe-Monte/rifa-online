import { useEffect, useState } from "react";
import { Container } from "./styles";

export function Quota({ number, sold, setSold }) {
  const [color, setColor] = useState("");
  const [clientName, setClientName] = useState("Disponível")

  function handleClick() {
    const isValid = confirm(`Deseja comprar a cota ${number}?`);
    if (!isValid) return;

    if (!color) {
      setColor("red");
      const userName = prompt("Diga seu nome na rifa:");
      setClientName(userName)
      console.log(`${userName} Comprou a cota ${number}`);
      
      setSold((prevSold) => [...prevSold, number]);
    } else {
      console.log(`Essa cota ja foi comprada!`);
    }

    console.log(`Foram vendidas ${sold.length} das 100 cotas`);
  }

  return (
    <Container onClick={handleClick} color={color}>
      {number}
      <p className="client-name">{clientName}</p>
    </Container>
  );
}
