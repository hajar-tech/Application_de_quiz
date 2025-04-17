import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  question : string = '' ;
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
}
