import { createContext, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
	id: number;
	title: string;
	amount: number;
	type: string;
	category: string;
	createdAt: string;
}

interface TransactionsProviderProps {
	children: React.ReactNode;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsContextData {
	transactions: Transaction[];
	createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
	{} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	//criando o state
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	//criando a função
	useEffect(() => {
		api
			.get("transactions")
			.then(resp => setTransactions(resp.data.transactions));
	}, []);

	async function createTransaction(transactionInput: TransactionInput) {
		const resp = await api.post("/transactions", {
			...transactionInput,
			createdAt: new Date(),
		});
		const { transaction } = resp.data;
		setTransactions([...transactions, transaction]);
	}

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}>
			{children}
		</TransactionsContext.Provider>
	);
}
