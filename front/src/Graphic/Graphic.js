import React, { useEffect, useMemo, memo } from 'react';
import { observer } from 'mobx-react-lite';

import BarChart from '../components/BarChart';
import { Input, Box } from './grahpicComponents';
import visualGraph from '../store/visualGraph';

const Graphic = () => {
  const { data, version, isLoad, isError } = visualGraph;

  useEffect(() => {
    visualGraph.fetchGraph();
  }, []);

  const handleChangeVesrion = ({ target: { value } }) => {
    visualGraph.changeDataVersion(value);
  };

  const graphData = useMemo(() => data[version], [data, version]);

  return (
    <Box>
      <h2>Graphs</h2>
      <div>
        <label>
          <Input
            type="radio"
            value="v1"
            name="version"
            onChange={handleChangeVesrion}
            checked={version === 'v1'}
          />
          v1
        </label>
        <label>
          <Input
            type="radio"
            value="v2"
            name="version"
            onChange={handleChangeVesrion}
            checked={version === 'v2'}
          />
          v2
        </label>
      </div>
      {isLoad &&
        (isError ? (
          <div>something went wrong, please reload the page</div>
        ) : (
          <BarChart width={800} height={400} graphData={graphData} />
        ))}
    </Box>
  );
};

export default memo(observer(Graphic));
