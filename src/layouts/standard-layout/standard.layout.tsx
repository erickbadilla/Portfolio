import React, { FunctionComponent } from 'react';
import { NavBar } from '@layouts/nav-bar/nav-bar.component';

import { Container } from '../container/container.styled';

import { FooterText, Header } from './standard.layout.styled';

interface IStandardLayout {
  children: React.ReactNode;
}

export const StandardLayout: FunctionComponent<IStandardLayout> = ({
  children,
}) => {
  return (
    <>
      <Header>
        <NavBar />
      </Header>

      <main>{children}</main>

      <footer>
        <Container>
          <FooterText>&copy; 2024 Erick Badilla</FooterText>
        </Container>
      </footer>
    </>
  );
};
