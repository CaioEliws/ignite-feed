import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

import studioImage from '../assets/studiodev-image.jpg'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src={studioImage} className={styles.cover} />

            <div className={styles.profile}>
                <img src="https://github.com/caioeliws.png" className={styles.avatar} />

                <strong>Caio Elias Vieira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}