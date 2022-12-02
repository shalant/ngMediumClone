import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
    form!: FormGroup;

    constructor(private fb: FormBuilder) {

    }

    ngOnInit(): void {
        this.initializeForm()    
    }


    initializeForm(): void {
        console.log('blah')
    };
}