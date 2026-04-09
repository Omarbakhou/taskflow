import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
interface Project { readonly id: string; readonly name: string; readonly color: string; }
interface SidebarProps { 
  readonly projects: Project[]; 
  readonly isOpen: boolean;
  readonly onRenameProject?: (project: Project) => void;
  readonly onDeleteProject?: (id: string) => void;
}

export default function Sidebar({ projects, isOpen, onRenameProject, onDeleteProject }: SidebarProps) {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
      <h2 className={styles.title}>Mes Projets</h2>
      <ul className={styles.list}>
        {projects.map(p => (
          <li key={p.id}>
            <NavLink
              to={`/projects/${p.id}`}
              className={({ isActive }: { isActive: boolean }) =>
                `${styles.item} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.dot} style={{ background: p.color }} />
              <span className={styles.projectName}>{p.name}</span>
              <div className={styles.actions}>
                {onRenameProject && (
                  <button 
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); onRenameProject(p); }} 
                    className={styles.renameBtn}
                    title="Renommer"
                  >
                    ✏️
                  </button>
                )}
                {onDeleteProject && (
                  <button 
                    onClick={(e) => { e.preventDefault(); e.stopPropagation(); onDeleteProject(p.id); }} 
                    className={styles.deleteBtn}
                    title="Supprimer"
                  >
                    🗑️
                  </button>
                )}
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}