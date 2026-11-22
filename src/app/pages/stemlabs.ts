import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ContactComponent } from '../shared/contact';
import { NavItem, SiteHeaderComponent } from '../shared/site-header';

@Component({
  selector: 'app-stemlabs-page',
  imports: [SiteHeaderComponent, ContactComponent],
  templateUrl: './stemlabs.html',
  styles: [],
})
export class StemlabsPage {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly navItems: NavItem[] = [
    { label: 'Programs', fragment: 'programs' },
    { label: 'Contact', fragment: 'contact' },
  ];

  constructor() {
    this.title.setTitle('Skilltej STEM Labs');
    this.meta.updateTag({ name: 'description', content: 'Skilltej STEM Labs' });
    this.meta.updateTag({ name: 'theme-color', content: '#f6fbfa' });
  }
}
