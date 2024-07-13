import { Container } from "./stylex";
import { Header } from "../../components/header";

import { QuotaCard } from "../../components/quota-card";

export function Home() {
  return (
    <Container>
      <Header title="Rifa online"/>
      <main>
        <QuotaCard name="Iphone"/>
        <QuotaCard name="Moto"/>
        <QuotaCard name="Boombox"/>
        <QuotaCard name="Carro"/>
        <QuotaCard name="Dinheiro"/>
      </main>
    </Container>
  );
}
