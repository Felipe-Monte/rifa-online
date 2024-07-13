import { Container } from "./styles"
import { useNavigate } from "react-router-dom"

export function QuotaCard({ number }){
  const navigate = useNavigate()

  function handleNavigate(){
    navigate("/details")
  }

  return(
    <Container onClick={handleNavigate}>
      <h2>Cota: {number}</h2>
    </Container>
  )
}