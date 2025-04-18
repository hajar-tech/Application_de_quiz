import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService  {
  quizData: any[] = [];
 private httpClient = inject(HttpClient) // Array to hold the quiz data
  constructor() { }
  // This method is used to fetch the questions from the API
  getQuestions() {
      this.httpClient.get('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
      .subscribe({
        next: (res: any) => {
          this.quizData = res.results; // Store the quiz data in the array
          console.log('Quiz Data:', this.quizData); // Log the quiz data to the console
        },
        error: (err) => {
          console.error('Error fetching questions:', err);
  }})};

  

}
