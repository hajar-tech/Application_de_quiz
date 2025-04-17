import { Component, inject,  OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule , HttpClientModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent  {
 
  
}
  
  


