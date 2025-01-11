import React from "react";
import { BrandLogo } from "../../ui/BrandLogo";
import { NavigationWrapper } from "./NavigationWrapper";
import { NavigationList } from "./NavigationList";
import { NavigationActions } from "./NavigationActions";
import { Container } from "../../ui/Container";

type Props = {};

export const Navigation = (props: Props) => {
  return (
    <nav>
      <Container lg>
        <NavigationWrapper>
          <div className="flex">
            <BrandLogo />
            <NavigationList />
          </div>
          <NavigationActions />
        </NavigationWrapper>
      </Container>
    </nav>
  );
};
