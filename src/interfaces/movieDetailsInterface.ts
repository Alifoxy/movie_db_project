export interface IMovieDetails{
    id: number;
    imdb_id:string;
    title: string;
    genres:[];
    tagline:string;
    original_language:string;
    overview:string;
    production_companies:ICompanies[],
    production_countries:ICountries[],
    budget:number;
    release_date:string;
    runtime:number;
    vote_average: number;

}

interface ICountries{
    name:string
}

interface ICompanies{
    name:string
}