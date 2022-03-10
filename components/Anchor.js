import styled from "styled-components";

export default styled.a`
  background-color: ${(props) => (props.isActive ? "#333" : "transparent")};
  color: ${(props) => (props.isActive ? "white" : "inherit")};
  width: 100%;
  padding: 0.6rem;
  text-align: center;
  border-radius: 2px;

  &:disabled {
    opacity: 0.4;
  }
`;
