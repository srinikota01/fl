import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface NavItem {
  label: string;
  fragment: string;
}

@Component({
  selector: 'app-site-header',
  imports: [RouterLink],
  styles: [],
  template: `
    <header class="site-header">
      <div class="brand">
        <img class="brand__logo" src="logo.jpg" alt="Skilltej" width="309" height="113" />
        @if (subscript()) {
          <span class="brand__subscript">{{ subscript() }}</span>
        }
      </div>

      @if (navItems().length) {
        <nav class="nav" aria-label="Page sections">
          @for (item of navItems(); track item.fragment) {
            <a [routerLink]="[]" [fragment]="item.fragment">{{ item.label }}</a>
          }
        </nav>
      }
    </header>
  `,
})
export class SiteHeaderComponent {
  readonly subscript = input('');
  readonly navItems = input<NavItem[]>([]);
}
