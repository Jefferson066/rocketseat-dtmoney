import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";



export function TransactionTable() {

  const { transactions } = useContext(TransactionsContext);
  return(
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
          {transactions.map(transaction => (

              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{
                   new Intl.NumberFormat('pt-BR', {
                     style: 'currency',
                     currency: 'BRL',
                  }).format(transaction.amount)
                }</td>
                <td>{transaction.category}</td>
                <td>{
                   new Intl.DateTimeFormat('pt-BR').format(
                     new Date (transaction.createdAt))
                }</td>
              </tr>

          ))}

        </tbody>
      </table>
    </Container>
  );
}

/*
<tr>
            <td>Desenvolvimento website</td>
            <td className="deposit">R$12000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
*/
