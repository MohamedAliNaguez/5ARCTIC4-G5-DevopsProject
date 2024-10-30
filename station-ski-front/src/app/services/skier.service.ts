import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skier } from '../model/skier'; // Your Skier model path

@Injectable({
  providedIn: 'root',
})
export class SkierService {
  private apiUrl = 'http://localhost:8080/api/skiers'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  // Get all skiers
  getSkiers(): Observable<Skier[]> {
    return this.http.get<Skier[]>(this.apiUrl);
  }

  // Get a specific skier by ID
  getSkier(id: number): Observable<Skier> {
    return this.http.get<Skier>(`${this.apiUrl}/${id}`);
  }

  // Add a new skier
  addSkier(skier: Skier): Observable<Skier> {
    return this.http.post<Skier>(this.apiUrl, skier);
  }

  // Update an existing skier
  updateSkier(id: number, skier: Skier): Observable<Skier> {
    return this.http.put<Skier>(`${this.apiUrl}/${id}`, skier);
  }

  // Delete a skier
  deleteSkier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
