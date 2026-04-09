import { useState, useEffect } from 'react';
import { useAuth } from './features/auth/authContext';
import Login from './features/auth/Login';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import type { AuthContextType } from './features/auth/authContext';
interface Project { id: string; name: string; color: string; }
interface Column { id: string; title: string; tasks: string[]; }
export default function App() {
const { state: authState } = useAuth() as AuthContextType;
if (!authState.user) {
return <Login />;
}
return <Dashboard />;
}
function Dashboard() {
const { state: authState, dispatch } = useAuth() as AuthContextType;
const [sidebarOpen, setSidebarOpen] = useState(true);
const [projects, setProjects] = useState<Project[]>([]);
const [columns, setColumns] = useState<Column[]>([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
async function fetchData() {
try {
const [p, co] = await Promise.all([
fetch('http://localhost:4000/projects'),
fetch('http://localhost:4000/columns'),
]);
setProjects(await p.json());
setColumns(await co.json());
} catch (e) { console.error(e); }
finally { setLoading(false); }
}
fetchData();
}, []);
if (loading) return <div className="loading">Chargement...</div>;
return (
<div className="dashboard">
  <Header
    title="TaskFlow"
    onMenuClick={() => setSidebarOpen(p => !p)}
    userName={authState.user?.name}
    onLogout={() => dispatch({ type: 'LOGOUT' })}
  />
  <div className="content">
    <Sidebar projects={projects} isOpen={sidebarOpen} />
    <MainContent columns={columns} />
  </div>
</div>
);
}