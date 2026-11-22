import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ContactComponent } from '../shared/contact';
import { SiteHeaderComponent } from '../shared/site-header';

@Component({
  selector: 'app-certify-page',
  imports: [SiteHeaderComponent, ContactComponent],
  templateUrl: './certify.html',
  styles: [],
})
export class CertifyPage {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly programs = [
    { no: '01', title: 'AI for Quality Engineers' },
    { no: '02', title: 'Gen AI Fundamentals' },
    { no: '03', title: 'Agentic AI Fundamentals' },
    { no: '04', title: 'AI for Data Analysts' },
    { no: '05', title: 'AI for Software Developers' },
    { no: '06', title: 'Data Science Fundamentals' },
    { no: '07', title: 'DevOps Practitioner' },
    { no: '08', title: 'Cyber Security Essentials' },
  ];

  constructor() {
    this.title.setTitle('Skilltej Certify');
    this.meta.updateTag({ name: 'description', content: 'Skilltej Certify' });
    this.meta.updateTag({ name: 'theme-color', content: '#f8f8ff' });
  }
}
