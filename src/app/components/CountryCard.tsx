import Link from 'next/link';

export default function CountryCard({ country }: any) {
    const { name, capital, population, flags } = country || {}
    return (
      <div className='col-md-4 p-6'>
        <div className="card" style={{ width: '18rem' }}>
          <Link href={`/${name.common}`}>
            <img className="card-img-top img-thumbnail" width={200} height={200} src={flags.png} alt={flags.alt}></img>
            <div className="card-body">
              <h5 className="card-title">{`Country: ${name.common}`}</h5>
              <p className="card-text">{`Capital City: ${capital}`}</p>
              <p className="card-text"><small className="text-muted">{`Population: ${population}`}</small></p>
            </div>
            </Link>
        </div>
      </div>

    );
  }