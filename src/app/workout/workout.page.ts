import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage implements OnInit {
  constructor(private router: Router) {}

  handleClick() {
    this.router.navigate(['/sworkout']);
  }

  handleClick1() {
    this.router.navigate(['/lworkout']);
  }

  handleClick2() {
    this.router.navigate(['/bworkout']);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }

  ngOnInit() {}
}
