import { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";

interface Transaction {
	id: number;
	title: string;
	amount: number;
	type: string;
	category: string;
	createdAt: string;
}

export function TransactionsTable() {
	//criando o state
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	//criando a função
	useEffect(() => {
		api.get("transactions").then(resp => setTransactions(resp.data.transactions));
  }, []);
  
  //useContext para pegar os dados do contexto

  const data = useContext(TransactionsContext);

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
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transaction.createdAt)
                  )}
                </td>
              </tr>
            )
          } )}
				</tbody>
			</table>
		</Container>
	);
}
