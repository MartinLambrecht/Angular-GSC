import { Directive, ElementRef } from "@angular/core";

@Directive({
	selector: "[hide]",
})
export class HideDirective {
	constructor(private eleRef: ElementRef<HTMLDivElement>) {
		eleRef.nativeElement.style.backgroundColor = "red";
		eleRef.nativeElement.onmouseover = (e) => {
			eleRef.nativeElement.style.visibility = "hidden";
		};
	}
}
