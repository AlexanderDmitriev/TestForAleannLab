import JobList from './JobList';
import DetailedJob from './DetailedJob/DetaliedJob';
import { Container, Wrapper } from './Container';

export const App = () => {
  return (
    <Wrapper>
      <Container>
        <JobList />
        <DetailedJob/>
      </Container>
    </Wrapper>
  );
};
