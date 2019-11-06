import { connect } from "react-redux"
import PropTypes from "prop-types"
import React, { useState, useRef, useEffect } from "react"

import { Axis } from "./axis"
import { axisRight } from "d3-axis"
import { updateBlockData } from "../actions"
import { Line } from "./line"
import { shiftArray, getScales, findLink, blockTypes, createTimeArray } from "../utils"
import usePrevious from '../../../hooks/UsePrevious'

const createDataArray = (binaryArray, carrierData, amplitude, frequency, totalTime) => {
  const time = createTimeArray(totalTime)
  return carrierData.map((data, index) => {
    if (binaryArray[index] === 1) {
      return data
    }
    else {
      const angularFrequency = 2 * Math.PI * (frequency * 2)
      const wt = angularFrequency * time[index]
      return amplitude * Math.sin(wt)
    }
  })
}

const getData = (blocks, links) => {
  const binaryData = findLink(blockTypes.DATA, blocks, links).data
  const { amplitude: carrierAmplitude, data: carrierData, frequency: carrierFrequency } = findLink(blockTypes.CARRIER_WAVE, blocks, links)
  return { binaryData, carrierData, carrierAmplitude, carrierFrequency }
}
const FSKData = props => {
  const oldProps = usePrevious(props)
  const { blocks, block, resolution, dimensions } = props
  const { binaryData, carrierData, carrierAmplitude, carrierFrequency } = getData(blocks, block.links)

  const [data, setData] = useState(createDataArray(binaryData, carrierData, carrierAmplitude, carrierFrequency, resolution))
  const [amplitude, setAmplitude] = useState(carrierAmplitude)

  const scale = getScales(data, dimensions, block, resolution, amplitude)

  const requestRef = useRef()

  const animate = () => {
    if (!block.paused) {
      setData(prevData => shiftArray(prevData))
    }
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    const { blocks, block, updateBlockData } = props
    if (oldProps) {
      const { blocks: prevBlocks, block: prevBlock } = oldProps
      const prevCarrierData = findLink(blockTypes.CARRIER_WAVE, prevBlocks, prevBlock.links).data
      const { binaryData, carrierData, carrierAmplitude } = getData(blocks, block.links)

      if (prevCarrierData !== carrierData) {
        const newData = setData(createDataArray(binaryData, carrierData, carrierAmplitude, carrierFrequency, resolution))
        updateBlockData({ id: block.id, data: newData })
        setAmplitude(carrierAmplitude)
      }
    }
    else {
      updateBlockData({ id: block.id, data })
    }
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  })

  return <g>
    <Line
      xScale={scale.xLine}
      yScale={scale.yLine}
      data={data}
      focused={false}
    />
    <Axis axis={axisRight} tickValues={scale.tickValues} scale={scale.yAxis} />
  </g>
}

FSKData.propTypes = {
  block: PropTypes.object,
  updateBlockValue: PropTypes.func,
  dimensions: PropTypes.object,
  resolution: PropTypes.number
}

const mapStateToProps = (state, props) => {
  return {
    blocks: state.mainPage.present.projects[0].blocks,
  }
}
export default connect(
  mapStateToProps,
  { updateBlockData }
)(FSKData)
