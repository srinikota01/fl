import { Routes } from '@angular/router';
import { CertifyPage } from './pages/certify';

export const routes: Routes = [
  { path: '', component: CertifyPage, title: 'Skilltej Certify' },
  { path: '**', redirectTo: '' },
];
