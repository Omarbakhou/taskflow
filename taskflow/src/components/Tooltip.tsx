import { useState, useLayoutEffect, useEffect, useRef } from 'react';
import styles from './Tooltip.module.css';

export default function Tooltip() {
const [position, setPosition] = useState({ top: 0, left: 0 });
const [useLayout, setUseLayout] = useState(false);
const buttonRef = useRef<HTMLButtonElement>(null);

// Version useEffect — flash visible
useEffect(() => {
if (useLayout) return;
if (buttonRef.current) {
const rect = buttonRef.current.getBoundingClientRect();
setPosition({ top: rect.bottom + 8, left: rect.left });
}
}, [useLayout]);

// Version useLayoutEffect — pas de flash
useLayoutEffect(() => {
if (!useLayout) return;
if (buttonRef.current) {
const rect = buttonRef.current.getBoundingClientRect();
setPosition({ top: rect.bottom + 8, left: rect.left });
}
}, [useLayout]);

return (
<div className={styles.container}>
<button onClick={() => {
setPosition({ top: 0, left: 0 });
setUseLayout(prev => !prev);
}}>
Basculer : {useLayout ? 'useLayoutEffect' : 'useEffect'}
</button>

<br /><br />
<button ref={buttonRef}>Survolez-moi</button>

<div className={styles.tooltip}>
{position.top === 0 ? '⚡ FLASH (0,0)' : 'Info-bulle positionnée !'}
</div>
</div>
);
}