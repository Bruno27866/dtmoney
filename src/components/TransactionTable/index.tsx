import { Container } from "./styles";

export function TransactionTabel() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Site</td>
                        <td className="deposit"> + R$ 2.500,00</td>
                        <td>Entrada</td>
                        <td>13 de Março de 2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw"> - R$ 1.000,00</td>
                        <td>Saída</td>
                        <td>25 de Março de 2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}