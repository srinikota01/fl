import { Component, input, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  styles: [],
  template: `
    <section class="section" id="contact">
      <div class="wrap">
        <div class="cta">
          <div>
            <h2>Contact</h2>
            <p>{{ description() }}</p>
          </div>

          <form class="contact-form" id="contact-form" #form="ngForm" (ngSubmit)="submit(form)">
            <input type="text" name="name" placeholder="Name" aria-label="Name" ngModel required />
            <input type="email" name="email" placeholder="Email" aria-label="Email" ngModel required />
            <input type="tel" name="contactNumber" placeholder="Contact Number" aria-label="Contact Number" ngModel required />
            <input type="text" name="subject" placeholder="Subject" aria-label="Subject" ngModel required />
            <button type="submit">Send</button>
          </form>

          <p class="form-status" id="form-status" role="status" aria-live="polite">{{ status() }}</p>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  readonly description = input.required<string>();
  readonly status = signal('');

  submit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.status.set('Thank you — we will be in touch soon.');
    form.resetForm();
  }
}
