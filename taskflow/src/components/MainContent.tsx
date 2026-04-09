import styles from './MainContent.module.css';
interface Column { readonly id: string; readonly title: string; readonly tasks: string[]; }
interface MainContentProps { readonly columns: readonly Column[]; }
export default function MainContent({ columns }: MainContentProps) {
return (

<main className={styles.main}>
<div className={styles.board}>
{columns.map(col => (
<div key={col.id} className={styles.column}>
<h3 className={styles.colTitle}>{col.title} ({col.tasks.length})</h3>
{col.tasks.map((task) => (
<div key={task} className={styles.card}>{task}</div>
))}
</div>
))}
</div>
</main>
);
}