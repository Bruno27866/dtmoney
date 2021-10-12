import { Container } from "../Summary/styles";
import entradas from '../../assets/entradas.svg'
import saídas from '../../assets/saídas.svg'
import total from '../../assets/total.svg'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt="Entradas" />
                </header>
                <strong> + R$1.500,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saídas} alt="Saídas" />
                </header>
                <strong> - R$500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>R$1.000,00</strong>
            </div>
        </Container>
    )
}