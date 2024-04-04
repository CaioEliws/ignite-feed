import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, src }) {
    // const hasBorder = props.hasBorder  != false;

    return (
        <img 
            src={src} 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
        />
    );
}