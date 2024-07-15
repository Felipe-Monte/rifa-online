import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Container } from "./styles";
import { Quota } from "../../components/quota";

export function DetailsQuota() {
  const number = 20;
  const quotas = Array.from({ length: number }, (_, index) => index + 1);

  const [sold, setSold] = useState([0]);

  useEffect(() => {
    console.log(sold);
  }, [sold]);

  return (
    <Container>
      <Header title="Detalhes da cota" />
      <main>
        <h2>Cota 1</h2>
        <p>Selecione quantas cotas você quiser!</p>

        <div className="container-quota">
          {quotas.map((number) => (
            <Quota key={number} number={number} sold={sold} setSold={setSold}  />
          ))}
        </div>
      </main>
    </Container>
  );
}
