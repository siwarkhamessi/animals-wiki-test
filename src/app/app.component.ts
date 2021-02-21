import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Animal } from '../domain/animal';
import { AnimalsService } from './animals-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AnimalsService],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  constructor(private animalService: AnimalsService) {
  }
  title = 'Animals wiki';
  varanimals;
  animalFamilies: string[];
  animals: Animal[];
  filteredAnimals: Animal[];
  filteredAnimals2: Animal[];

  ngOnInit() {
    this.animalService.getAnimals().subscribe(animalsList => {
      this.varanimals = animalsList;
      this.animals = this.varanimals.animals;
      this.filteredAnimals = this.animals;

      this.animalFamilies = this.animals
        .map(animal => animal.family).filter(((value, index, array) => array.indexOf(value) === index));
      //this.animaltest.map(animal => animal.family);

    });
  }

  filterAnimalsPerFamily(family: string) {
    if (family === '') {
      this.filteredAnimals = this.animals;
    } else {
      this.filteredAnimals = this.animals.filter(animal => animal.family === family);
    }
  }
}
