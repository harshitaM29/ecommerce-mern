import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;
const Announment = () => {
  return <Container>Super Deal! Free shipping on Orders Over Rs.450</Container>;
};

export default Announment;
