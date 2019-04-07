import React, { memo } from 'react';
import { Container, Top } from './styles';

import Thumb from './partials/Thumb';
import MainInfo from './partials/MainInfo';

import { Anime } from '../../store/filters/types';

interface OwnProps {
  anime: Anime;
}

const Card = ({ anime }: OwnProps) => (
  <Container>
    <Top>
      <Thumb name={anime.name} image={anime.image} />
      <MainInfo name={anime.name} genres={anime.genres} />
    </Top>
  </Container>
);

export default memo(Card);
