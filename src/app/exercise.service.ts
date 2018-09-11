import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Token 792ed3f50d2f0dcecaae9c1751f14b1711842096' })
};

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor( private http:HttpClient) { }

  getExercises() {
    return this.http.get('https://wger.de/api/v2/exercise/');
  }
}
