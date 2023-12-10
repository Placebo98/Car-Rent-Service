import { SearchBarWrapper } from './SearchBar.styled';
import { CarMakeFilter } from 'components/CarMakeFilter/CarMakeFilter';
import { CarMileageFilter } from 'components/CarMileageFilter/CarMileageFilter';
import { CarPriceFilter } from 'components/CarPriceFilter/CarPriceFilter';
import { SearchButton } from 'components/SearchButton/SearchButton';

export const SearchBar = () => {
  return (
    <SearchBarWrapper>
      {' '}
      <CarMakeFilter />
      <CarPriceFilter />
      <CarMileageFilter />
      <SearchButton />
    </SearchBarWrapper>
  );
};
