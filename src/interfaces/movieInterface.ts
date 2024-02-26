export interface IMovie{
    id: number;
    imdb_id:string;
    title: string;
    genres:[];
    tagline:string;
    original_language:string;
    overview:string;
    production_companies:[],
    production_countries:[],
    budget:number;
    release_date:string;
    runtime:number;
    vote_average: number;

}