import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../interfaces/Animal';
import { ListService } from '../../services/list.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  // animals: Animal[] = [
  //   {name: 'Stuart', type: 'Mouse', age: 2},
  //   {name: 'Thor', type: 'Dog', age: 7},
  //   {name: 'Ornitorrinco', type: 'Duck', age: 3},
  // ];
  animals: Animal[] = [];
  animalDetails!: string;

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal) {
    console.log('Removendo animal...');
    this.listService.remove(animal).subscribe(); // subscribe é usado pelo Angular para o angular entender que a requisição foi concluída. Deve-se sempre usar
    this.animals = this.animals.filter((item) => item.name !== animal.name);
  }

  getAnimals(): void {
    this.listService.getAll().subscribe(animals => (this.animals = animals));
  }
}
