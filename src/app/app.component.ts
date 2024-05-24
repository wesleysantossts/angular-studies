import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { CommonModule } from '@angular/common';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';

const imports = [
  RouterOutlet, 
  FirstComponentComponent, 
  ParentDataComponent,
  DirectivesComponent,
  IfRenderComponent,
  EventosComponent,
  EmitterComponent,
  ListRenderComponent,
  PipesComponent,
  TwoWayBindingComponent,
  FormsModule,
  RouterModule,
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports, // aqui tem que inserir todos os componentes que foram criados
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular';
  name = 'Teste Wesley';
  carro = { marca: 'HB20', ano: 2016 };
  cidade = 'Santos';
  estado = 'SP';
  pais = 'Brasil';
}
