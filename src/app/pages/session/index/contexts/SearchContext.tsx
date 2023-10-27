import {
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { Services } from '../../../../../shared';

const SEARCH_PARAMS_DEFAULT_VALUES = {
  createdAt: ' ',
  playerId: '',
  isBot: '',
  isSpammer: '',
  limit: '100',
};

type SearchParamsType = {
  createdAt: string;
  playerId: string;
  isBot: string;
  isSpammer: string;
  limit: string;
};

type PropsSearchContextForm = {
  playerOptions: string[];
  searchParams: SearchParamsType;
  setSearchParams: (value: SetStateAction<SearchParamsType>) => void;
  SEARCH_PARAMS_DEFAULT_VALUES: SearchParamsType;
};

interface IProps {
  children: ReactNode;
}

const SearchContextForm = createContext<PropsSearchContextForm>(
  {} as PropsSearchContextForm,
);

const SearchContextFormProvider: React.FC<IProps> = ({ children }) => {
  const [searchParams, setSearchParams] = useState(
    SEARCH_PARAMS_DEFAULT_VALUES,
  );
  const playerSearchService = useMemo(() => new Services.Player.Search(), []);
  const [playerOptions, setPlayerOptions] = useState<Array<string>>([]);
  const playerIds = useCallback(async () => {
    await playerSearchService.findAll();
    return playerSearchService.success ? playerSearchService.response.data : [];
  }, [playerSearchService]);

  useEffect(() => {
    (async () => {
      setPlayerOptions(await playerIds());
    })();
  }, [playerIds]);

  const values = {
    playerOptions,
    searchParams,
    setSearchParams,
    SEARCH_PARAMS_DEFAULT_VALUES,
  };

  return (
    <SearchContextForm.Provider value={{ ...values }}>
      {children}
    </SearchContextForm.Provider>
  );
};

SearchContextFormProvider.propTypes = {
  children: PropTypes.node,
};

export { SearchContextFormProvider, SearchContextForm };
export default SearchContextForm;
