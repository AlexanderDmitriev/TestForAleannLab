import JobList from './JobList';
import { Container, Wrapper } from './Container';

export const App = () => {
  return (
    <Wrapper>
      <Container>
        <JobList />
      </Container>
    </Wrapper>
  );
};
