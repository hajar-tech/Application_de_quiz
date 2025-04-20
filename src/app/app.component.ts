import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbareComponent } from './navbare/navbare.component';
import { AccueilComponent } from './accueil/accueil.component';
import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz/quiz.component';

@Component({
  selector: 'app-root',
  imports: [NavbareComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quizzApp';
}
