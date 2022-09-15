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

const TableContent: React.FC<Props> = ({ section, comparison }) => {
  return (
    <Collapsible title={section.title}>
      {section.content.map((content: MapPropsContentType, id) => (
        <Styles.Table lineTableNumber={id} key={id}>
          <Styles.ColumnTitle>{content.description}</Styles.ColumnTitle>
          {comparison.map((region, idx) => (
            <Styles.Column gridColumnNumber={idx + 2} key={idx}>
              <MetricDetails district={region} metric={content} />
            </Styles.Column>
          ))}
        </Styles.Table>
      ))}
    </Collapsible>
  );
};

export default TableContent;
