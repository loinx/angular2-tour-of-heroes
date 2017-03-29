import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/model/hero';
import { HeroService } from '../api/hero.service';
@Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    heroes: Hero[];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeros().then(heroes => this.heroes = heroes.slice(1, 5));
    }
}