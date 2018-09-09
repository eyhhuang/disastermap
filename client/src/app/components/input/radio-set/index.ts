import { Component, OnInit, Input } from '@angular/core';

export interface InputRadioProps {
    inputSet: Array<{
        label: string;
        value: string;
    }>;
    initialValue: string;
}

@Component({
    selector: 'app-input-radio-set',
    template: `
        <label *ngFor="let item of props.inputSet">
            <input
                type="radio"
                name="selected"
                value="item.value"
                (click)="update(item.value)"
                ngModel
                [checked]="item.value===props.initialValue"
            />
            {{ item.label }}
        </label>
        <p>{{ value }}</p>`
})
export class InputRadioSetComponent implements OnInit {
    private value = '';
    @Input() public props: InputRadioProps = {
        initialValue: '',
        inputSet: [],
    };

    public update(newValue: string) {
        this.value = newValue;
    }
    public ngOnInit(): void {
        this.value = this.props.initialValue;
    }
}
