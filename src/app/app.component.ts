import { Component } from '@angular/core';


import { Hero } from './shared/models/Hero.model';

@Component({
    selector: 'app-test',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title: 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}