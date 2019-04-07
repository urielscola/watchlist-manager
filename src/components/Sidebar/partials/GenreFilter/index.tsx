import React, { memo } from 'react';
import { Container } from './styles';

interface OnChangeFunc {
  (event: React.ChangeEvent<HTMLInputElement>): void;
}

interface OwnProps {
  genre: string;
  onChange: OnChangeFunc;
  checked: boolean;
}

const GenreFilter = ({ genre, onChange, checked }: OwnProps) => (
  <Container>
    <input
      id={genre}
      type="checkbox"
      value={genre}
      onChange={onChange}
      checked={checked}
    />
    <label htmlFor={genre}>{genre}</label>
  </Container>
);

export default memo(GenreFilter);
