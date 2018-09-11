import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { EXERCISES } from '../mock-exercises';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})

export class ExerciseComponent implements OnInit {
  exercises = EXERCISES;
  exercise: Exercise = {
    id: 1,
    name: 'Barbell Bench Press',
    rest: 60
  }

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.getExercises();
  }

  getExercises() : void {
    this.exerciseService.getExercises().subscribe(
      data => { console.log(data) },
      err => console.error(err),
      () => console.log('done loading exercises')
    );
  }

}
