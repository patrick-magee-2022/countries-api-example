import Link from 'next/link';
import  { getCountry }  from '../api/CountriesApi';
import SingleCountry from '../components/SingleCountry';

export default async function CountryPage({ params }: any) {
    const country = await getCountry(params);
    return (
        <SingleCountry singleCounrty={country}/>
    );
}