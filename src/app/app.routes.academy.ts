import { Routes } from '@angular/router';
import { AcademyPage } from './pages/academy';

export const routes: Routes = [
  { path: '', component: AcademyPage, title: 'Skilltej Academy' },
  { path: '**', redirectTo: '' },
];
