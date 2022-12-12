import { useState } from 'react';
import { useEffect } from 'react';
import { Country } from '../../components/Country'
import { api } from '../../services/api/';
import styles from './styles.module.css'

export const Home = () => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    api.get("all")
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => console.log(error))
  }, [])
  return (
    <div className={styles.containerCards}>
      {countries.map((countryData, key) => {
        return (<Country data={countryData} key={key} />)
      })}
    </div>
  );
}
