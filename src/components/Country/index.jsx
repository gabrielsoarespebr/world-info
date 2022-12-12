import styles from './styles.module.css'

// (props) was unstructure to ({name}), so you can use just {name} instead of {props.name}
export const Country = ({ name }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.name}>{name}</h2>
        </div>
    )
}