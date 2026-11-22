import { Routes } from '@angular/router';
import { StemlabsPage } from './pages/stemlabs';

export const routes: Routes = [
  { path: '', component: StemlabsPage, title: 'Skilltej STEM Labs' },
  { path: '**', redirectTo: '' },
];
