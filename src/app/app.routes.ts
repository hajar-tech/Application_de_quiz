import { Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { AccueilComponent } from './accueil/accueil.component';

export const routes: Routes = [  

    {
        path: '',
        pathMatch: 'full',
        redirectTo:'accueil'
    },
    {
        path: 'quiz',
        component: QuizComponent
    },
    {
        path: 'question',
        component: QuestionComponent
    },
    {
        path: 'accueil',
        component: AccueilComponent
    }
];
