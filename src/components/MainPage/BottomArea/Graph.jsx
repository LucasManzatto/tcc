import React from 'react'
import { axisRight } from 'd3-axis'
import { Axis } from './axis'
import { Line } from './line'

export const Graph = ({ scale, data }) => {
  return <g>
    <Line
      xScale={scale.xLine}
      yScale={scale.yLine}
      data={data}
    />
    <Axis axis={axisRight} tickValues={scale.tickValues} scale={scale.yAxis} />
  </g>
}