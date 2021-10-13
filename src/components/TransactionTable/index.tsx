import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionTabel() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get('trasactions')
            .then(response => setTransactions(response.data))
    }, []);
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
                    {transactions.map(transactions => (
                        <tr>
                            <td>{transactions.title}</td>
                            <td className="deposit">{transactions.amount}</td>
                            <td>{transactions.category}</td>
                            <td>{transactions.createdAt}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </Container>
    );
}