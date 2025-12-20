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

    hasContent = computed(() => !!this.text());
    hasImage = computed(() => !!this.path());
}
