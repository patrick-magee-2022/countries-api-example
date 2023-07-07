import Link from 'next/link';

export default function SingleCountry({ singleCounrty }: any) {
    const { name, capital, population, flags, borders} = singleCounrty[0] || {}
    let currencies = []
    let languages = []

    if (singleCounrty) {
        for (const currency in singleCounrty[0].currencies || []) {
            currencies.push(singleCounrty[0].currencies[currency].name)
        }
        for (const language in singleCounrty[0].languages || []) {
            languages.push(singleCounrty[0].languages[language])
        }
    }
    return (
        <div className='container d-flex align-items-center justify-content-center'>
            <div className='row'>
                <Link href={`/`} className='p-2'>Back</Link>
                <div className="card" style={{ width: '40rem' }}>
                    <img className="card-img-top" width={200} height={200} src={flags.png} alt={flags.alt}></img>
                    <div className="card-body">
                        <p className="card-title"><strong>Country:{name.common}</strong></p>
                        <p className="card-text">Capital City:<strong>{capital}</strong></p>
                        <p className="card-text">Population:<strong>{population}</strong></p>
                        <p className='card-text'>Currencies<strong>{currencies.join(", ")}</strong></p>
                        <p className='card-text'>Languages:<strong>{languages.join(", ")}</strong></p>
                        {borders && borders.length > 0 ?
                        <p className='card-text'>Border Countries:<strong>{borders.join(", ")}</strong></p>
                        :<p className='card-text'><strong>No Border countries</strong></p>}
                    </div>
                </div>
            </div>
        </div>
    );
}