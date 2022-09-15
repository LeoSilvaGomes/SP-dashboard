import React from 'react';

import Collapsible from '@components/Collapsible';

import MetricDetails from '@components/MetricDetails';

import { MapPropsContentType, MapPropsSectionType } from '@customTypes/map';

import { District } from '@customTypes/district';

import * as Styles from './styles';

interface Props {
  section: MapPropsSectionType;
  comparison: Array<District>;
}

const GridContent: React.FC<Props> = ({ section, comparison }) => {
  return (
    <Collapsible title={section.title}>
      <Styles.GridContainer>
        {section.content.map((content: MapPropsContentType, id) => (
          <Styles.Grid key={id}>
            <Styles.Title>
              <h2>{content.title}</h2>
            </Styles.Title>
            <Styles.GridItem>
              {comparison.map((district, idx) => (
                <Styles.ComparisonLabel key={idx}>
                  <label title={district?.properties.NM_MUN}>{district?.properties.NM_MUN}</label>
                  <MetricDetails district={district} metric={content} />
                </Styles.ComparisonLabel>
              ))}
            </Styles.GridItem>
          </Styles.Grid>
        ))}
      </Styles.GridContainer>
    </Collapsible>
  );
};

export default GridContent;
