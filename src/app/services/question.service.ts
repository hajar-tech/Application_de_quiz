import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { get } from 'http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService  {
  quizData: any[] = [];
 private httpClient = inject(HttpClient) // Array to hold the quiz data
  constructor() { }
  
   //receive the amount , ctecogie and difficulty from the quiz component
    // and use them in the API URL
     
  
  // This method is used to fetch the questions from the API
  getQuestions(amount: number, category: number, difficulty: string) {
    

     this.httpClient.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
     .subscribe({
       next: (res: any) => {
         this.quizData = res.results; // Store the quiz data in the array
         console.log('Quiz Data:', this.quizData); // Log the quiz data to the console
       },
       error: (err) => {
         console.error('Error fetching questions:', err);
 }
})

};
    
}      
      
      