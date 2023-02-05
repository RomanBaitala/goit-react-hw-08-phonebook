import { IconButton } from 'components/Common/StyledComponents/IconButton.styled';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CONST } from 'redux/constants';
import { filterSearch } from 'redux/phonebook/filterSlice';
import { selectFilter } from 'redux/selectors';
import { FilterLabel, FilterFieldInput, FilterSearch } from './Filter.styled';

export const Filter = () => {
  const { search } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const clearSearchFilter = useCallback(() => {
    dispatch(filterSearch(''));
  }, [dispatch]);

  const onKeyPress = useCallback(
    e => {
      if (e.code === 'Escape') clearSearchFilter();
    },
    [clearSearchFilter]
  );

  useEffect(() => {
    document.getElementById('contactFIlter').addEventListener('keydown', onKeyPress);
  }, [onKeyPress]);

  const handleChange = e => {
    dispatch(filterSearch(e.target.value));
  };

  return (
    <FilterSearch>
      <FilterLabel htmlFor="contactFIlter">{CONST.icon.search}</FilterLabel>
      <FilterFieldInput id="contactFIlter" type="text" name="filterSearch" value={search} onChange={handleChange} autoComplete="off" />
      {search.length > 0 && <IconButton onClick={clearSearchFilter}>{CONST.icon.clear}</IconButton>}
    </FilterSearch>
  );
};
