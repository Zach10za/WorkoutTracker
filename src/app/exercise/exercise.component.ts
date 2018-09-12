import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
// import { ExerciseService } from '../exercise.service';

const CARD_SIZE = 80;

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: []
})


export class ExerciseComponent implements OnInit {
  exercises: Exercise[];
  unSelectedExercises = [];
  selectedExercises = [];

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exerciseService.getExercises().subscribe((data: Exercise[]) => {
      this.exercises = data;

      this.exercises.forEach((ex, i) => {
        ex.isSelected = false;
        ex.top = i * CARD_SIZE + (i + 1) * 10;
      });
      this.unSelectedExercises = this.exercises.map(ex => ex.id);
    });
  }

  selectExercise(event, exercise) {
    if (event.target.id !== 'selectCard' && event.target.id !== 'removeCard') return;
    if (exercise.isSelected) {
      this.unSelectedExercises.push(exercise.id);
      this.selectedExercises.splice(this.selectedExercises.indexOf(exercise.id), 1);
    } else {
      this.selectedExercises.push(exercise.id);
      this.unSelectedExercises.splice(this.unSelectedExercises.indexOf(exercise.id), 1);
    }
    this.unSelectedExercises.sort((a,b) => a - b)
    this.exercises[this.exercises.indexOf(exercise)].isSelected = !exercise.isSelected;
    this.exercises.forEach(ex => {
      let idx = ex.isSelected ? this.selectedExercises.indexOf(ex.id) : this.unSelectedExercises.indexOf(ex.id);
      ex.top = idx * CARD_SIZE + (idx + 1) * 10;
    });
  }

  moveSelectedExercise(event, exercise, direction) {
    let index = this.selectedExercises.indexOf(exercise.id);
    this.selectedExercises.splice(index, 1);
    this.selectedExercises.splice(direction === "up" ? index - 1 : index + 1, 0, exercise.id);
    this.exercises.forEach(ex => {
      let idx = ex.isSelected ? this.selectedExercises.indexOf(ex.id) : this.unSelectedExercises.indexOf(ex.id);
      ex.top = idx * CARD_SIZE + (idx + 1) * 10;
    });
  }
}
