
export async function getCountry(name: any) {
    const res = await fetch(
        `https://restcountries.com/v3.1/name/${name.country}?fullText=true`,
    );
    const data = await res.json();
    return data;
}

export async function getAllCountries() {
    const countriesRequest = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region');
    const countriesResponse = await countriesRequest.json();
    return countriesResponse;
}

