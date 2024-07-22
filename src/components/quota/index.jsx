import React from "react";
import { Container } from "./styles";

export function Quota({ index, onClick }) {
  return (
    <Container onClick={onClick}>
      <span>Cota {index}</span>
    </Container>
  );
}
