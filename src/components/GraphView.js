import React, { useEffect, useState } from 'react'
import Graph from 'react-graph-vis'
import { useApp } from '../AppContext'
import "../styles/GraphView.css"

export default function GraphView({ PackagesList, ClientsList, EdgesList }) {

  const { mockPKG, clickedPKG, setClickedPKG } = useApp()

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


  const events = {
    select: async function (event) {
      const { nodes, edges } = event;
      await getPkgInfo(nodes[0])
    }
  }

  const getPkgInfo = (id) => {
    mockPKG.forEach(element => {
      if (element.id === id) {
        setClickedPKG(element);
      }
    });
  }

  return (
    <div className='graph-container'>
      <Graph
        graph={graph}
        options={options}
        events={events}
      />
      {/* <h1>Packge Name: {clickedPKG?.name}</h1>
      <h2>Packge ID: {clickedPKG?.id}</h2>
      <h2>Packge version: {clickedPKG?.version}</h2> */}
    </div>
  )
}
