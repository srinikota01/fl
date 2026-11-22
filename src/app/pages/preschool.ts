import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ContactComponent } from '../shared/contact';
import { NavItem, SiteHeaderComponent } from '../shared/site-header';

@Component({
  selector: 'app-preschool-page',
  imports: [SiteHeaderComponent, ContactComponent],
  templateUrl: './preschool.html',
  styles: [],
})
export class PreschoolPage {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly navItems: NavItem[] = [
    { label: 'Programs', fragment: 'programs' },
    { label: 'Partner', fragment: 'concept' },
    { label: 'Research', fragment: 'research' },
    { label: 'Contact', fragment: 'contact' },
  ];

  constructor() {
    this.title.setTitle('Skilltej Preschool Labs');
    this.meta.updateTag({
      name: 'description',
      content: 'Skilltej Preschool Labs — early learning through play, concept and research',
    });
    this.meta.updateTag({ name: 'theme-color', content: '#fdf8f4' });
  }
}
