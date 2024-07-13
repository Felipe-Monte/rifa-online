import { Container } from "./styles"

export function QuotaCard({ number }){
  return(
    <Container>
      <h2>Cota: {number}</h2>
    </Container>
  )
}