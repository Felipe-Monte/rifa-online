import { useState } from "react";
import { Container } from "./styles";

export function Quota({ number }) {
  const [select, setSelect] = useState(false)

  function handleClick() {
    console.log(`Você clicou na conta: ${number}`);
  }

  return <Container onClick={handleClick}>{number}</Container>;
}
