import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
        `
})
export class InputRadioSetComponent implements OnInit {
    private value = '';
    @Input() public props: InputRadioProps = {
        initialValue: '',
        inputSet: [],
    };
    @Output() categoryChooser: EventEmitter<any> = new EventEmitter<any>();
    public update(newValue: string) {
        this.value = newValue;
        this.categoryChooser.emit(this.value);
        // console.log(this.value);
    }
    public ngOnInit(): void {
        this.value = this.props.initialValue;
    }
}
