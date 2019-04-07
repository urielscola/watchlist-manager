import React, { memo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Container, Header, FilterItem, FilterTitle } from './styles';

import { ApplicationState } from '../../store';
import * as FilterActions from '../../store/filters/actions';

import GenreFilter from './partials/GenreFilter';

interface DispatchProps {
  addGenre(data: string): void;
  removeGenre(data: number): void;
}

interface StateProps {
  genres: string[];
  activeGenres: string[];
}

type Props = StateProps & DispatchProps;

const isActive = (genre: string, activeGenres: string[]): boolean =>
  activeGenres.includes(genre);

const Sidebar = (props: Props) => {
  const { genres, activeGenres } = props;

  const onGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = event.target;
    const { addGenre, removeGenre, activeGenres } = props;
    const index = activeGenres.indexOf(value);
    return checked ? addGenre(value) : removeGenre(index);
  };

  return (
    <Container>
      <Header>
        <h2>Filtros</h2>
        <span>Limpar</span>
      </Header>
      <FilterItem>
        <FilterTitle>Buscar</FilterTitle>
        <input type="text" placeholder="Nome..." />
      </FilterItem>
      <FilterItem>
        <FilterTitle>Gênero</FilterTitle>
        {genres.map(genre => (
          <GenreFilter
            checked={isActive(genre, activeGenres)}
            key={genre}
            genre={genre}
            onChange={onGenreChange}
          />
        ))}
      </FilterItem>
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  genres: state.filters.genres,
  activeGenres: state.filters.activeGenres
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(FilterActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(memo(Sidebar));
