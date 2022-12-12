import styles from './styles.module.css'

// (props) was unstructure to ({data}), so you can use just {data} instead of {props.data}
export const Country = ({data}) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.name}>{data.name.common}</h2>
            <div className={styles.grid}>
                <img className={styles.flag} src={data.flags.png} alt="Flag" />
                <ul className={styles.info}>
                    <li>Capital: {data.capital}</li>
                    <li>Region: {data.region}</li>
                </ul>
            </div>
        </div>
    )
}