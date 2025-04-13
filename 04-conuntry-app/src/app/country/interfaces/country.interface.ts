export interface Country {
    name: string;
    cca2: string;
    capital: string;
    population: number;
    region: string;
    subregion: string;    
    coatOfArms: string|undefined;
    flags: {
        png: string;
        svg: string;
    };
    area: number;
}