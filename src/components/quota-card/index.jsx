import { Container } from "./styles"
import { useNavigate } from "react-router-dom"

export function QuotaCard({ name }){
  const navigate = useNavigate()

  function handleNavigate(){
    navigate("/details")
  }

  return(
    <Container onClick={handleNavigate}>
      <h2>Rifa {name}</h2>
    </Container>
  )
}