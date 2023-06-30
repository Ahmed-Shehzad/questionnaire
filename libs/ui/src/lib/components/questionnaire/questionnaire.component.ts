import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  FindManyQuestionnaireDocument,
  FindManyQuestionnaireQueryVariables,
  Questionnaire,
} from '@foxbase/codegen';
import { Apollo } from 'apollo-angular';

@Component({
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatCheckboxModule],
  selector: 'foxbase-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  questionnaires: Questionnaire[] = [];
  constructor(private apollo: Apollo) {}
  ngOnInit(): void {
    this.apollo
      .query<Questionnaire[], FindManyQuestionnaireQueryVariables>({
        query: FindManyQuestionnaireDocument,
        variables: {},
      })
      .subscribe((result) => {
        const res = [...result.data];
        this.questionnaires.push(...res);
        return this.questionnaires;
      });
  }
}
