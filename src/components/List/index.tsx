import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Container, ListWrapper } from './styles';

import Card from '../Card';

import { ApplicationState } from '../../store';
import { Anime } from '../../store/filters/types';

interface StateProps {
  animes: Anime[];
  filteredAnimes: Anime[];
  activeGenres: string[];
}

type Props = StateProps;

const List = (props: Props) => {
  const { animes, filteredAnimes, activeGenres } = props;
  const displayArray = !!filteredAnimes.length ? filteredAnimes : animes;

  return (
    <Container>
      <ListWrapper>
        {displayArray
          .filter(anime =>
            activeGenres.some(genre => anime.genres.indexOf(genre) >= 0)
          )
          .map((item: Anime) => (
            <Card key={item.name} anime={item} />
          ))}
      </ListWrapper>
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  animes: state.filters.animes,
  filteredAnimes: state.filters.filteredAnimes,
  activeGenres: state.filters.activeGenres
});

export default connect(
  mapStateToProps,
  null
)(memo(List));
