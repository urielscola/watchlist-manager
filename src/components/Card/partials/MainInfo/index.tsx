import React from 'react';

import Tag from '../Tag';

import { Container, Top, Title, Genres } from './styles';

interface OwnProps {
  name: string;
  genres: string[];
}

const MainInfo = ({ name, genres }: OwnProps) => (
  <Container>
    <Top>
      <Title>{name}</Title>
      <Genres>
        {genres.map(genre => (
          <Tag key={genre} genre={genre} />
        ))}
      </Genres>
    </Top>
  </Container>
);

export default MainInfo;
