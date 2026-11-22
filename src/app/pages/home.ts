import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ContactComponent } from '../shared/contact';
import { NavItem, SiteHeaderComponent } from '../shared/site-header';

@Component({
  selector: 'app-home-page',
  imports: [SiteHeaderComponent, ContactComponent],
  templateUrl: './home.html',
  styles: [],
})
export class HomePage {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly navItems: NavItem[] = [
    { label: 'About', fragment: 'about' },
    { label: 'Contact', fragment: 'contact' },
  ];

  constructor() {
    this.title.setTitle('Skilltej');
    this.meta.updateTag({ name: 'description', content: 'Skilltej — On a mission to Transform Nextgen INDIA' });
    this.meta.updateTag({ name: 'theme-color', content: '#f8faff' });
  }
}
