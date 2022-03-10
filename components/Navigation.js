import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useRouter } from "next/router";

export default function Navigation() {
  const { pathname, push } = useRouter();
  console.log(pathname);
  return (
    <Nav>
      <Button isActive={pathname === "/"} onClick={() => push("/")}>
        Play
      </Button>
      <Button
        isActive={pathname === "/history"}
        onClick={() => push("/history")}
      >
        History
      </Button>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
`;
