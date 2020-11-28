import React, { useState, memo } from 'react';
import * as d3 from 'd3';

import { Svg, Wrapper, AxisY } from './barChartComponents';

const BarChart = ({ graphData, width, height }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const getX = d3
    .scaleBand()
    .domain(graphData.map((item) => item.x))
    .range([0, width]);

  const getY = d3.scaleLinear().domain([0, width]).range([height, 0]);

  const getYAxis = (ref) => {
    const yAxis = d3.axisLeft(getY).tickSize(-width).tickPadding(7);
    d3.select(ref).call(yAxis);
  };

  const getXAxis = (ref) => {
    const xAxis = d3.axisBottom(getX);
    d3.select(ref).call(xAxis);
  };

  const linePath = d3
    .line()
    .x((d) => getX(d.x) + getX.bandwidth() / 2)
    .y((d) => getY(d.value))
    .curve(d3.curveMonotoneX)(graphData);

  const areaPath = d3
    .area()
    .x((d) => getX(d.x) + getX.bandwidth() / 2)
    .y0((d) => getY(d.value))
    .y1(() => getY(0))
    .curve(d3.curveMonotoneX)(graphData);

  const handleMouseMove = (e) => {
    const x = e.nativeEvent.offsetX;
    const index = Math.floor(x / getX.step());
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <Wrapper>
      <Svg
        width={width}
        height={height}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <AxisY ref={getYAxis} />
        <g
          ref={getXAxis}
          transform={`translate(0,${getY(0)})`}
          style={{ transition: '1s' }}
        />
        <path
          fill="#7cb5ec"
          d={areaPath}
          opacity={0.2}
          style={{ transition: '1s' }}
        />
        <path
          strokeWidth={3}
          fill="none"
          stroke="#7cb5ec"
          d={linePath}
          style={{ transition: '1s' }}
        />
        {graphData.map((item, index) => {
          return (
            <g key={index}>
              <circle
                cx={getX(item.x) + getX.bandwidth() / 2}
                cy={getY(item.value)}
                r={index === activeIndex ? 6 : 4}
                fill="#7cb5ec"
                stroke={index === activeIndex ? 2 : 0}
                stroke="#fff"
                style={{ transition: 'all 1s' }}
              />
              <text
                fill="#7cb5ec"
                x={getX(item.x) + getX.bandwidth() / 2}
                y={-20}
                dx={1}
                textAnchor="middle"
                style={{ transition: 'all 1s' }}
              >
                {item.value}
              </text>
            </g>
          );
        })}
      </Svg>
    </Wrapper>
  );
};

export default memo(BarChart);
