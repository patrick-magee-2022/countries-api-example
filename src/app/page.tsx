import styles from '../app/Countries.module.scss';
import CountryCard  from './components/CountryCard';
import  { getAllCountries }  from './api/CountriesApi';

export default async function Home() {
  const allCountries = await getAllCountries();

  return (
    <>
      <div className="container">
        <div className='row'>
          {allCountries?.map((country: any, index: number) => (
            <CountryCard key={country.name.common} country={country}></CountryCard>
          ))}
        </div>
      </div>
    </>
  );
}
