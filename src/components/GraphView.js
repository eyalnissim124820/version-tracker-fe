import React, { useEffect, useState } from 'react'
import Graph from 'react-graph-vis'
import { useApp } from '../AppContext'


export default function GraphView({ PackagesList, ClientsList, EdgesList }) {

  const graph = {
    nodes: [...ClientsList ? ClientsList : [], ...PackagesList ? PackagesList : []],
    edges: [...EdgesList ? EdgesList : []]
  }


  const options = {
    layout: {
      hierarchical: true
    },
    interaction: {
      navigationButtons: true,
    },
    nodes: {
    },
    edges: {
      color: "gray",
      smooth: {
        enabled: true,
        type: 'dynamic',
        roundness: 0.5
      },
      arrows: {
        to: {
          enabled: true,
          scaleFactor: 0.1,
          type: 'circle'
        }
      }
    },
    physics: {
      minDistance: '400px'
    },
    height: "100%",
  }
  const events = {}
  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
    />
  )
}
