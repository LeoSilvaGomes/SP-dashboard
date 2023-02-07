const selected = {
  type: 'Feature',
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-53.7451171875, -30.5137659522877],
        [-53.74391555786133, -30.51554058622328],
      ],
    ],
  },
  properties: {
    MUNICIPALITY_CODE: 2709400,
    MUNICIPALITY_NAME: 'Viçosa',
    ACRONYM_FU: 'AL',
    AREA_KM2: 367.888,
  },
};

const districtMock = {
  all: [],
  selected,
  setSelected: () => {},
};

const comparisonMock = {
  comparison: [selected],
  addComparisonDistrict: () => {},
  removeComparisonDistrict: () => {},
};

export const scenarios = {
  districtMock,
  comparisonMock,
};
