import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./styles";
import { Content }  from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Content>
        <Summary />
      </Content>
      <TransactionsTable/>
    </Container>
  );
}