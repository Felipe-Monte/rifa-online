import { Container } from "./stylex";
import { Header } from "../../components/header";

import { QuotaCard } from "../../components/quota-card";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <h1>Home</h1>
        <QuotaCard number="1"/>
        <QuotaCard number="2"/>
        <QuotaCard number="3"/>
      </main>
    </Container>
  );
}
