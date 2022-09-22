import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { useComparison } from '@store/comparisonContext';
import { ComparisonProvider } from '@store/comparisonContext';
import geosesData from '@data/Data.json';
import districtProps from '@config/district';

import ComparisonModeComponent from '@components/ComparisonMode';
import GridMode from '@components/ComparisonMode/GridMode';

type GeosesDataObjectKey = keyof typeof geosesData;

const comparisonDistrictMock = [
  {
    type: '',
    _geometry: {
      type: '',
      coordinates: [[[]]],
    },
    geometry: {
      type: '',
      coordinates: [[[]]],
    },
    properties: {
      CD_MUN: 1200013,
      NM_MUN: 'Acrelândia',
      SIGLA_UF: 'RS',
      AREA_KM2: 1811.613,
    },
  },
];

const ComparisonMode = () => {
  const { addComparisonDistrict } = useComparison();

  React.useEffect(() => {
    addComparisonDistrict(comparisonDistrictMock);
  }, []);

  return <ComparisonModeComponent comparisonType="grid" />;
};

describe('Grid Mode', () => {
  test('Test comparison data', () => {
    const { getAllByText } = render(
      <ComparisonProvider>
        <ComparisonMode />
      </ComparisonProvider>,
    );

    const munName = getAllByText('Acrelândia');

    expect(munName).toBeTruthy;
  });


  test('Test section data', () => {
    const { getAllByText } = render(
      <ComparisonProvider>
        <ComparisonMode />
      </ComparisonProvider>,
    );

    districtProps.forEach((item) => {
      item.content.forEach((contentItem) => {
        const key = '1200013' as GeosesDataObjectKey;

        const data = geosesData[key];
        const rawValue = data[contentItem.label];
        const value = contentItem.format(rawValue);

        const renderedValue = getAllByText(value);

        expect(renderedValue).toBeTruthy;
      });
    });
  });

  test('Test title', () => {
    const { getByText } = render(
      <ComparisonProvider>
        <ComparisonMode />
      </ComparisonProvider>
    );
    const title = getByText('Demográfica (D)');
    expect(title).toBeTruthy;
  });

  test('Test TableContainer', () => {
    const { container: tablerContainer } = render(
      <GridMode comparison={comparisonDistrictMock} />
    );
    expect(tablerContainer.firstChild).toHaveStyle('width: calc(100% - 50px)');
    expect(tablerContainer.firstChild).toHaveStyle('height: fit-content');
    expect(tablerContainer.firstChild).toHaveStyle('padding: 109px 25px 35px 25px');
    expect(tablerContainer.firstChild).toHaveStyle('padding-bottom: 35px');
  });

  test('Test information display', () => {
    const { getAllByText } = render(
      <ComparisonProvider>
        <ComparisonMode />
      </ComparisonProvider>,
    );

    districtProps.forEach((item) => {
      expect(getAllByText(item.title)).toBeTruthy;
      comparisonDistrictMock.forEach((district) => {
        expect(getAllByText(district.properties.NM_MUN)).toBeTruthy;
      });
    });
  });
});
