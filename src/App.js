import { useEffect, useState } from 'react';
import './App.css';
import { useApp } from './AppContext';
import GraphView from './components/GraphView';
import Mac from './attch/mac.svg';
import PKG from './attch/box.svg'

function App() {

  const { mockData, print, mockPKG } = useApp()

  const [clients, setClients] = useState([
    ...mockData.map((client, index) => {
      return ({ id: client.id, label: `${client.name} (${client.client_version})`, title: `IP: ${client.ip}`, color: '#F07373', physics: false, shape: 'image', image: Mac, size: 50 })
    })
  ])

  const [packges, setPackages] = useState([
    ...mockPKG.map((pkg, index) => {
      return ({ id: pkg.id, label: `${pkg.name} (${pkg.version})`, shape: 'image', image: PKG ,})
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
