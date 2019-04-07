import React from 'react';

import { Container } from './styles';

interface OwnProps {
  genre: string;
}

const Tag = ({ genre }: OwnProps) => (
  <Container>
    <span>{genre}</span>
  </Container>
);

export default Tag;
