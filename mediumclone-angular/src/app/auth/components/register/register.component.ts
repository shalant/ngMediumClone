import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { registerAction } from "../../store/actions";
import { isSubmittingSelector } from "../../store/selectors";

@Component({
    selector: 'mc-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
    form!: FormGroup;
    isSubmitting$: Observable<boolean>

    constructor(private fb: FormBuilder, private store: Store) {

    }

    ngOnInit(): void {
        this.initializeForm()    
        this.initializeValues()
    }

    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
        console.log('isSubmitting$', this.isSubmitting$)
    }

    initializeForm(): void {
        console.log('blah')
        this.form = this.fb.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        })
    };

    onSubmit(): void {
        console.log('submit', this.form.value, this.form.valid)
        this.store.dispatch(registerAction(this.form.value))
    }
}