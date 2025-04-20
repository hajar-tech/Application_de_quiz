import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core';
import { get } from 'http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService  {
  quizData: any[] = [];
 private httpClient = inject(HttpClient); 
 private questions: any[] = [];// Array to hold the quiz data
 private currentIndex = 0;
 private score = 0;

 public currentQuestion$ = new BehaviorSubject<any>(null);
 public quizFinished$ = new BehaviorSubject<boolean>(false);
 public totalScore$ = new BehaviorSubject<number>(0);

 private totalQuestions = new BehaviorSubject<number>(0);
public totalQuestions$ = this.totalQuestions.asObservable();
 amount: number = 0;
 category: number = 0;
  difficulty: string = '';
  constructor() { }
  
   //receive the amount , ctecogie and difficulty from the quiz component
    // and use them in the API URL
     
  
  // This method is used to fetch the questions from the API
  getQuestions(amount: number, category: number, difficulty: string) {
    
    this.amount = amount;
    this.category = category;
    this.difficulty = difficulty;
     this.httpClient.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
     .subscribe({
      next: (res: any) => {
        this.questions = res.results;
        this.currentIndex = 0;
        this.score = 0;
        this.totalScore$.next(0);
        this.quizFinished$.next(false);
        this.emitCurrentQuestion();
        },
      error: err => console.error('Erreur chargement questions:', err)
          });

 };


 private emitCurrentQuestion() {
  if (this.currentIndex < this.questions.length) {
    const question = this.questions[this.currentIndex];
    const choices = [...question.incorrect_answers, question.correct_answer]
      .sort(() => Math.random() - 0.5);

    this.currentQuestion$.next({
      ...question,
      choices
    });
  } else {
    this.quizFinished$.next(true);
  }
}

answerQuestion(selected: string) {
  const current = this.questions[this.currentIndex];
  if (selected === current.correct_answer) {
    this.score++;
    this.totalScore$.next(this.score);
  }
  this.currentIndex++;
    this.emitCurrentQuestion();
    
}

setTotalQuestions(count: number) {
  this.totalQuestions.next(count);
}
restartQuiz() {
  // Recharge les questions avec les mêmes paramètres
  
  this.getQuestions(this.amount, this.category, this.difficulty);
}

}