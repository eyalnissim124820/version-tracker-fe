import React from 'react'
import Graph from 'react-graph-vis'

export default function GraphView() {
  const graph = {
    nodes: [
      { id: 1, label: 'Client', shape: 'database', color: '#F07373', title: "node 1 tootip text" },
      { id: 2, label: 'Node2', title: "node 2 tootip text" },
      { id: 3, label: 'Node3', title: "node 3 tootip text" },
      { id: 4, label: 'Node4', title: "node 4 tootip text" },
      { id: 5, label: 'Node5', title: "node 5 tootip text" },
      { id: 6, label: 'Node6', title: "node 6 tootip text" },
      { id: 7, label: 'Node7', title: "node 7 tootip text" },
      { id: 8, label: 'Node8', title: "node 8 tootip text" },
      { id: 9, label: 'Node9', title: "node 9 tootip text" }
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 1, to: 4 },
      { from: 1, to: 5 },
      { from: 1, to: 6 },
      { from: 1, to: 7 },
      { from: 1, to: 8 },
      { from: 1, to: 9 },
    ]
  }

  const options = {
    // layout: {
    //   hierarchical: true
    // },
    interaction: {
      navigationButtons: true
    },
    nodes: {
      shape: 'box',

    },
    edges: {
      color: "blue",
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
