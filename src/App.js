import { useEffect, useState } from 'react';
import './App.css';
import { useApp } from './AppContext';
import GraphView from './components/GraphView';

function App() {

  const { mockData, print, mockPKG } = useApp()

  const [clients, setClients] = useState([
    ...mockData.map((client, index) => {
      return ({ id: client.id, label: `${client.name} (${client.client_version})`, title: `IP: ${client.ip}`, color: '#F07373', physics: false, shape: 'database' })
    })
  ])

  const [packges, setPackages] = useState([
    ...mockPKG.map((pkg, index) => {
      return ({ id: pkg.id, label: `${pkg.name} (${pkg.version})` })
    })
  ])

  const [edges, setEdges] = useState(
    mockData.flatMap((client) =>
      client?.dependencies?.map((dep) => {
        const targetPkg = mockPKG.find((pkg) => pkg.id === dep?.id);
        if (targetPkg) {
          return { from: client.id, to: targetPkg.id };
        }
        return null;
      })
    ).filter(Boolean)
  );

  return (
    <div className="App">
      <GraphView PackagesList={packges} ClientsList={clients} EdgesList={edges} />
    </div>
  );
}

export default App;
