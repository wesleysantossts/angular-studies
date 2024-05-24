import { Component } from '@angular/core';
import { Animal } from '../../interfaces/Animal';
import { ListService } from '../../services/list.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  animal?: Animal;

  constructor(
    private listService: ListService,
    private route: ActivatedRoute
  ) {
    this.getAnimal();
  }

  getAnimal(): void {
    const id = Number(this.route.snapshot.paramMap.get("id")); // para pegar o id do parametro da URL
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal));
  }
}
