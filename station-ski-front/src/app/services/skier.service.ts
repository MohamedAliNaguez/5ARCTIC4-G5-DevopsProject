import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skier } from '../model/skier';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SkierService {
  private apiUrl = environment.apiUrl + "/api";

  constructor(private http: HttpClient) {}

  // Get all skiers
  getSkiers(): Observable<Skier[]> {
    return this.http.get<Skier[]>(this.apiUrl + '/all');
  }

  // Get a specific skier by ID
  getSkier(id: number): Observable<Skier> {
    return this.http.get<Skier>(`${this.apiUrl}/get/${id}`);
  }

  // Add a new skier
  addSkier(skier: Skier): Observable<Skier> {
    return this.http.post<Skier>(this.apiUrl + '/add', skier);
  }

  // Update an existing skier
  updateSkier(id: number, skier: Skier): Observable<Skier> {
    return this.http.put<Skier>(`${this.apiUrl}/${id}`, skier);
  }

  // Delete a skier
  deleteSkier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
