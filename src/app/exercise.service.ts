import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {

  constructor( private http: HttpClient) { }

  getExercises() {
    return this.http.get('https://workout.zachloza.com/v1/exercises');
  }
}
