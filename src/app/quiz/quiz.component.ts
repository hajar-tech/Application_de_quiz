import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
 
  private http = inject(HttpClient);

  categories: Array<any> = [];
  // par default 
  selectedCategory: number = 9; 
  selectedDifficulty: string = 'medium';
  numQuestions: number = 10;
  httpClient: any;
  quizData: any;

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.http.get('https://opentdb.com/api_category.php')
     .subscribe({
      next: (res: any) => {
        this.categories = res.trivia_categories;
        console.log('Categories:', res);
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
      }
    });
  }

  private questionS: QuestionService = inject(QuestionService);


  constructor(private questionService: QuestionService) {
    this.questionS = questionService;
  }

 
 startQuiz(): void {
//coll the method getQuestions from the QuestionService
this.questionS.getQuestions(this.numQuestions, this.selectedCategory, this.selectedDifficulty)
alert('Quiz started!');

  }
}
