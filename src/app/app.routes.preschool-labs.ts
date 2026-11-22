import { Routes } from '@angular/router';
import { PreschoolPage } from './pages/preschool';

export const routes: Routes = [
  { path: '', component: PreschoolPage, title: 'Skilltej Preschool Labs' },
  { path: '**', redirectTo: '' },
];
