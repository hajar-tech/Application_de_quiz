import { Component, inject,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../services/question.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule ,RouterLink],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {
  
  question: any;
  isFinished = false;
  score = 0;
  totalQuestions = 0;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    
    this.questionService.currentQuestion$.subscribe(q => {
      this.question = q;
    });

    this.questionService.quizFinished$.subscribe(finished => {
      this.isFinished = finished;
    });

    this.questionService.totalScore$.subscribe(score => {
      this.score = score;
    });

    this.questionService.totalQuestions$.subscribe(count => {
      this.totalQuestions = count;
    });
  }
 
 selectAnswer(choice: string) {
  this.questionService.answerQuestion(choice);
}

restartQuiz() {
  this.questionService.restartQuiz();

}


  
}


