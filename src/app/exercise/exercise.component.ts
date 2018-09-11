import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { EXERCISES } from '../mock-exercises';
import { trigger, state, style, animate, transition } from '@angular/animations';
// import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: [],
  animations: [
    trigger('fold', [
      transition(':enter', [style({height: 0, overflow: 'hidden'}), animate('.3s ease', style({height: '*'}))]),
      transition(':leave', [style({height: '*', overflow: 'hidden'}), animate('.3s ease', style({height: 0}))])
    ])
  ]
})



export class ExerciseComponent implements OnInit {
  exercises = JSON.parse(JSON.stringify(EXERCISES));
  selectedExercises = [];

  constructor() { }

  ngOnInit() { }

  selectExercise(exercise) {
    this.selectedExercises.push(exercise);
    this.exercises = this.exercises.filter(ex => ex.id !== exercise.id);
  }

  removeExercise(exercise) {
    this.exercises.push(exercise);
    this.selectedExercises = this.selectedExercises.filter(ex => ex.id !== exercise.id);
  }

}
