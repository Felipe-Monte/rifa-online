import { Container } from "./stylex";
import { Header } from "../../components/header";

import { QuotaCard } from "../../components/quota-card";

export function Home() {
  return (
    <Container>
      <Header title="Rifa online"/>
      <main>
        <QuotaCard srcImg={"/carro.jpg"} name="Carro" price={"100,00"}/>
      </main>
    </Container>
  );
}
