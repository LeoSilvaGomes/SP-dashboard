import { useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import { useComparison, useFeatures } from "../../store"

import { Map, Sidebar, ComparisonView, Header } from "../../components"
import "./styles.css"

export const Main = () => {
  const { comparison, addComparisonFeature, comparisonMode, setComparisonMode } = useComparison();
  const { features } = useFeatures();
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    setComparisonMode(location.pathname.startsWith('/comparison'));
  }, [location, setComparisonMode]);

  useEffect(() => {
    if (comparison.length === 0 && location.pathname.startsWith('/comparison/')) {
      const pathIds = location.pathname.replace('/comparison/', '');
      if (pathIds) {
        const ids = pathIds.split('+');
        const featuresFromUrl = features.filter((ft: any) => ids.includes(ft.properties["FEATID"].toString()));
        addComparisonFeature(featuresFromUrl);
      } else {
        history.replace("/");
      }
    }
  }, [features, location, history, comparison, addComparisonFeature]);

  useEffect(() => {
    if (location.pathname.startsWith('/comparison/') && features.length !== 0) {
      const ids = comparison.map((feature: any) => feature.properties.FEATID);
      const newPath = '/comparison/' + ids.join('+');
      if (location.pathname !== newPath) {
        history.replace(newPath);
      }
    }
  }, [comparison, features, location, history]);

  return (
    <div className="main">
      <Header/>
      { comparisonMode ?
        <>
          <Sidebar comparison/>
          <ComparisonView />
        </>
      :
        <>
          <Sidebar/>
          <Map mini={false}/>
        </>
      }
    </div>
  )
}