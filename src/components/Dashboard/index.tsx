import { Summary } from '../Summary'
import { TransactionTabel } from '../TransactionTable'
import {Container} from './styles'

export function Dashboard() {
    return(
        <Container>
            <Summary/>
            <TransactionTabel/>
        </Container>
    )
}