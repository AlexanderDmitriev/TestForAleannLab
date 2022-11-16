import JobList from './JobList';
import DetailedJob from './DetailedJob/DetaliedJob';
import { Container, Wrapper } from './Container';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Wrapper>
      <Container>
        {/* <Routes>
          <Route></Route>
          <Route></Route>
        </Routes> */}
        <JobList />
        <DetailedJob />
      </Container>
    </Wrapper>
  );
};
