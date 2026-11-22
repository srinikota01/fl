import { Routes } from '@angular/router';
import { AcademyPage } from './pages/academy';
import { CertifyPage } from './pages/certify';
import { HomePage } from './pages/home';
import { PreschoolPage } from './pages/preschool';
import { StemlabsPage } from './pages/stemlabs';

const host = typeof window !== 'undefined' ? window.location.hostname.toLowerCase() : '';

const subdomainRoutes: Record<string, Routes> = {
  'academy.skilltej.com': [
    { path: '', component: AcademyPage, title: 'Skilltej Academy' },
    { path: '**', redirectTo: '' },
  ],
  'stemlabs.skilltej.com': [
    { path: '', component: StemlabsPage, title: 'Skilltej STEM Labs' },
    { path: '**', redirectTo: '' },
  ],
  'preschool-labs.skilltej.com': [
    { path: '', component: PreschoolPage, title: 'Skilltej Preschool Labs' },
    { path: '**', redirectTo: '' },
  ],
  'certify.skilltej.com': [
    { path: '', component: CertifyPage, title: 'Skilltej Certify' },
    { path: '**', redirectTo: '' },
  ],
};

const mainRoutes: Routes = [
  { path: '', component: HomePage, title: 'Skilltej' },
  { path: 'academy', component: AcademyPage, title: 'Skilltej Academy' },
  { path: 'stemlabs', component: StemlabsPage, title: 'Skilltej STEM Labs' },
  { path: 'preschool-labs', component: PreschoolPage, title: 'Skilltej Preschool Labs' },
  { path: 'certify', component: CertifyPage, title: 'Skilltej Certify' },
  { path: '**', redirectTo: '' },
];

export const routes: Routes = subdomainRoutes[host] ?? mainRoutes;
