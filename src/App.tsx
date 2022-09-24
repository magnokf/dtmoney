import styled from 'styled-components';
import { GlobalStyle } from './styles/global';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  `;
export function App(){
  return (
    <div className="App">
      <Title>Hello World, this is my first styled component!</Title>
      <GlobalStyle />

    </div>
  )
}
