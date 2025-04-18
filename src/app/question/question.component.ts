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
  constructor(private questionService: QuestionService) {}
 ngOnInit(): void {
//coll the method getQuestions from the QuestionService
    this.questionService.getQuestions();
  }
 }


  
  


