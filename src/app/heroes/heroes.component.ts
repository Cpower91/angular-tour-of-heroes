import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';
import { Observable, of } from 'rxjs';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
heroes: Hero[] =[];
constructor(private heroService:HeroService) {

}
selectedHero?:Hero;
onSelect(hero:Hero): void{
  this.selectedHero = hero;
}
getHeroes(): Observable<Hero[]>{
const heroes = of(HEROES);
return heroes;
}

ngOnInit(): void{
  this.getHeroes();
}
};
