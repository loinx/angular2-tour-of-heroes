import { Injectable } from '@angular/core';
import { Hero } from '../shared/model/hero';
import 'rxjs/add/operator/toPromise';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes';
    constructor(
        private http: Http
    ) { }
    /**
     * return list of Hero
     */
    getHeros(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl).toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);

        ;
    };
    private handleError(error: any): Promise<any> {
        console.error('An error occureed ', error);
        return Promise.reject(error.message || error);
    }
    /**
     * return list of Hero with delay option
     */
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeros()), 200);
        });
    }

    getHero(id: number): Promise<Hero> {
        return this.getHeros().then(heros => heros.find(hero => hero.id === id));
    }
}
