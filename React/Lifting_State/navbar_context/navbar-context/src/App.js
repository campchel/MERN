import Navbar from './components/navbar';
import Form from './components/Form';
import Wrapper from './components/Wrapper';
import FormWrapper from './components/FormWrapper';
import './App.css';

function App() {
  return (
    <Wrapper>
      <Navbar>
        <FormWrapper>
          <Form></Form>
        </FormWrapper>
      </Navbar>
    </Wrapper>
  )
}

export default App;
