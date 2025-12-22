import { Component, computed, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'custom-card',
    imports: [TranslateModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
})
export class CardComponent {
    title = input<string>();
    text = input<string>();
    text2 = input<string>();
    path = input<string>();
    width = input<string>();
    height = input<string>();
    flip = false;

    onToggleFlip() {
    this.flip = !this.flip;
    }

    onKeydown(event: KeyboardEvent) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // evita scroll con Space
        this.onToggleFlip();
      }
    }

    hasContent = computed(() => !!this.text());
    hasImage = computed(() => !!this.path());
}
