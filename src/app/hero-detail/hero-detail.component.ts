import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../shared/model/hero';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../api/hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.params.switchMap((param: Params) => this.heroService.getHero(+param['id'])).subscribe(hero => this.hero = hero);;
  }

  goBack(): void {
    this.location.back();
  }
}
