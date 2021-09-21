import incomeImg from '../../assets/income.svg';
import outImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from "./styles";

export function Summary() {
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas"/>
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={outImg} alt="entradas"/>
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div className="highligth-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="entradas"/>
        </header>
        <strong>R$10000,00</strong>
      </div>

    </Container>
  )
}
