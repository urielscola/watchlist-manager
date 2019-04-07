import React from 'react';

import { Container, Image } from './styles';

interface OwnProps {
  name: string;
  image: string;
}

const Thumb = ({ name, image }: OwnProps) => (
  <Container>
    <figure>
      <Image src={image} alt={name} />
    </figure>
  </Container>
);

export default Thumb;
