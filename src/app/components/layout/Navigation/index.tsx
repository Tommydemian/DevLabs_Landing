import React from "react";
import { Container } from "../../ui/Container";
import { Logo } from "./Logo";
import { NavigationWrapper } from "./NavigationWrapper";
import { NavigationList } from "./NavigationList";

type Props = {};

export const Navigation = (props: Props) => {
  return (
    <nav>
      <Container>
        <NavigationWrapper>
          <Logo />
          <NavigationList />
        </NavigationWrapper>
      </Container>
    </nav>
  );
};
