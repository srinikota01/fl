import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ContactComponent } from '../shared/contact';
import { NavItem, SiteHeaderComponent } from '../shared/site-header';

@Component({
  selector: 'app-academy-page',
  imports: [SiteHeaderComponent, ContactComponent],
  templateUrl: './academy.html',
  styles: [],
})
export class AcademyPage {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly navItems: NavItem[] = [
    { label: 'Programs', fragment: 'programs' },
    { label: 'Contact', fragment: 'contact' },
  ];

  constructor() {
    this.title.setTitle('Skilltej Academy');
    this.meta.updateTag({ name: 'description', content: 'Skilltej Academy' });
    this.meta.updateTag({ name: 'theme-color', content: '#f7f9ff' });
  }
}
