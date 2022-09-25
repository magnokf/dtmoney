import { useEffect } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

export function TransactionsTable(){

  useEffect(() => {
    api.get('transactions')
      .then(resp => console.log(resp.data))
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
            <tr>
              <td>Desenvolvimento de website</td>
              <td className="deposit">R$12.000</td>
              <td>Desenvolvimento</td>
              <td>20/02/2021</td>
            </tr>
            <tr>
              <td>Desenvolvimento de website</td>
              <td className="deposit">R$12.000</td>
              <td>Desenvolvimento</td>
              <td>20/02/2021</td>
            </tr>
            <tr>
              <td>Aluguel Loja A</td>
              <td className="withdraw">R$12.000</td>
              <td>Aluguel</td>
              <td>20/02/2021</td>
            </tr>
            <tr>
              <td>Desenvolvimento de website</td>
              <td className="deposit">R$12.000</td>
              <td>Desenvolvimento</td>
              <td>20/02/2021</td>
            </tr>
        </tbody>
          
      </table>
      
    </Container>
  );
}