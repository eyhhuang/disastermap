import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-input-text',
    template: `
      <input #box
        type="text"
        value="{{ value }}"
        (input)="onValueChange($event.target.value)"
        placeholder="{{ placeholder }}"
      />
      <p>{{value}}</p>
    `
})
export class InputTextComponent implements OnInit {
    private value = '';
    @Input() public placeholder: string = '';

    public onValueChange(newValue: string) {
        this.value = newValue;
    }
    public ngOnInit(): void { }
}
