import React from "react";
import styled from "styled-components";
import Anchor from "./Anchor";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navigation() {
  const { pathname, push } = useRouter();
  console.log(pathname);
  return (
    <Nav>
      <Link href="/" passHref>
        <Anchor as="a" isActive={pathname === "/"}>
          Play
        </Anchor>
      </Link>
      <Link href="/history" passHref>
        <Anchor as="a" isActive={pathname === "/history"}>
          History
        </Anchor>
      </Link>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
`;
