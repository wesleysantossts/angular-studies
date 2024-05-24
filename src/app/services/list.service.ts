import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/Animal';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  apiUrl: string = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) { }

  remove(animal: Animal) {
    console.log('Removendo animal no service...');
    // return animals.filter((a) => animal.name !== a.name);
    return this.http.delete<Animal>(`${this.apiUrl}/${animal.id}`)
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}
