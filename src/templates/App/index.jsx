import { Heading } from '../../components/Heading';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper background="red">
        <Heading>O texto que eu quero como build</Heading>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
