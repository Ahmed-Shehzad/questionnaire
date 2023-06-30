import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'questionnaire',
  },
  {
    path: 'questionnaire',
    pathMatch: 'full',
    loadComponent: () =>
      import('@foxbase/ui').then((m) => m.QuestionnaireComponent),
  },
];
