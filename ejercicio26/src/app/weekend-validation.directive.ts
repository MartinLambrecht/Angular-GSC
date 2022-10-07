import { Directive, Input } from "@angular/core";
import {
	AbstractControl,
	NG_VALIDATORS,
	ValidationErrors,
	Validator,
	ValidatorFn,
} from "@angular/forms";

@Directive({
	selector: "[appWeekendValidation]",
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: WeekendValidationDirective,
			multi: true,
		},
	],
})
export class WeekendValidationDirective implements Validator {
	constructor() {}

	validate(control: AbstractControl): ValidationErrors | null {
		return weekendValidator()(control);
	}
}

export function weekendValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const dayToValidate = new Date(control.value).getDay();
		switch (dayToValidate) {
			case 6:
				return { isSaturday: true };
			case 0:
				return { isSunday: true };
			default:
				return null;
				break;
		}
	};
}
