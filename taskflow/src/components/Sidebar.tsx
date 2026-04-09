import styles from './Sidebar.module.css';
interface Project { readonly id: string; readonly name: string; readonly color: string; }
interface SidebarProps { readonly projects: Project[]; readonly isOpen: boolean; }
export default function Sidebar({ projects, isOpen }: SidebarProps) {
return (
<aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}>
<h2 className={styles.title}>Mes Projets</h2>
<ul className={styles.list}>
{projects.map(p => (
<li key={p.id} className={styles.item}>
<span className={styles.dot} data-color={p.color} />
{p.name}
</li>
))}
</ul>
</aside>
);
}