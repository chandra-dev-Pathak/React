import styled from "styled-components";

const Box = styled.div`
  width: fit-content;
  background-color: gray;
  box-shadow: 1px 1px 3px 2px #343434;
  padding: 50px;
  border-radius: 20px;
`;

const Button = styled.button`
  background-color: pink;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
  letter-spacing: 1px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  padding: 10px 20px;
  box-shadow: 1px 2px 2px #ff526f;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #ffffff;
    border: 1px solid #ff4867;
    color: pink;
  }
`;

export default function Styled_Components() {
    return (
        <Box>
            <Button>save me</Button>
        </Box>
    );
}
