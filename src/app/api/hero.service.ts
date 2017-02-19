import { Injectable } from '@angular/core';
import { Hero } from '../shared/model/hero';
import { HEROES } from '../shared/data/heros-mock';

@Injectable()
export class HeroService {
    /**
     * return list of Hero
     */
    getHeros(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    };
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
