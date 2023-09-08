import { Country, State, City } from 'country-state-city';
import { useMemo, useState } from 'react';

const initialState = {
  country: '',
  state: '',
  city: '',
};

export const useSelectCity = (
  query: string,
  returnCity: (value: string) => void,
  setOpen: (value: boolean) => void
) => {
  const [info, setInfo] = useState(initialState);

  const currentStep = info.state
    ? City.getCitiesOfState(info.country, info.state)
    : info.country
    ? State.getStatesOfCountry(info.country)
    : Country.getAllCountries();

  const items = useMemo(() => {
    return currentStep
      .map((item) => ({
        id: 'isoCode' in item ? item.isoCode : item.name,
        label: item.name,
      }))
      .filter((item) => item.label.includes(query));
  }, [currentStep, query]);

  const setItem = (value: string) => {
    if (info.state) {
      setInfo(initialState);
      returnCity(value);
      setOpen(false);
    } else if (info.country) {
      setInfo({ ...info, state: value });
    } else {
      setInfo({ ...info, country: value });
    }
  };

  return {
    items,
    setItem,
    info: {
      ...info,
      countryLabel: Country.getCountryByCode(info.country)?.name || '',
      stateLabel: State.getStateByCodeAndCountry(info.state, info.country)?.name || '',
    },
    setInfo,
  };
};
