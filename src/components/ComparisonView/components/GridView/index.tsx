import countyProps, {
  CountySectionType,
  CountyContentType,
} from "../../../../config/countyProps";
import { useComparison } from "../../../../store";
import { CollapsibleSection } from "../../../index";
import geosesData from "../../../../data/GeoSesObject.json";
import { MetricDetails } from "../../../index";
import "./styles.css";

export const GridView = () => {
  const { comparison } = useComparison();

  const propsDetails = (section: CountySectionType) => {
    return (
      <div className="grid-container">
        {section.content.length > 0 ? (
          <>
            {section.content.map((content: CountyContentType, id) => (
              <div key={id} className="grid-item metric">
                <div className="grid-item-head">
                  <h2>{content.label}</h2>
                </div>
                <div className="grid-item-body">
                  {comparison.map((feature, id) => (
                    <div key={id} className="comparison">
                      <label title={feature?.properties.NM_MUN}>
                        {feature?.properties.NM_MUN}
                      </label>
                      {
                        //@ts-ignore
                        geosesData[feature?.properties.CD_MUN][content.id] ? (
                          <MetricDetails
                            key={id}
                            feature={feature}
                            metric={content}
                          />
                        ) : (
                          <div className="propsContent" key={id}>
                            <h2>{content.label}</h2>
                            <p>No Data</p>
                          </div>
                        )
                      }
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="metric" style={{ padding: "10px 0" }}>
            No Data
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="grid-view">
      {countyProps.map((section) => (
        <CollapsibleSection title={section.title} key={section.title}>
          {propsDetails(section)}
        </CollapsibleSection>
      ))}
    </div>
  );
};
