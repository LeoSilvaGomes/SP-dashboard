import { MapPropsSectionType } from "@customTypes/mapProps";

import socioeconomicProps from "./socioeconomic";
import demographicProps from "./demographic";
import economicProps from "./economic";
import socialProps from "./social";

const districtProps: MapPropsSectionType[] = [
  demographicProps,
  socialProps,
  socioeconomicProps,
  economicProps,
];

export default districtProps;
