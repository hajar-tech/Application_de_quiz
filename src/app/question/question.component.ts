import { Component, inject,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent implements OnInit {
  
  question: any;
  isFinished = false;
  score = 0;

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    
    this.questionService.currentQuestion$.subscribe(q => {
      this.question = q;
    });

    this.questionService.quizFinished$.subscribe(finished => {
      this.isFinished = finished;
    });
 }
 selectAnswer(choice: string) {
  this.questionService.answerQuestion(choice);
}
}


  
  


