import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-parent",
	templateUrl: "./parent.component.html",
	styleUrls: ["./parent.component.css"],
})
export class ParentComponent implements OnInit {
	currentCounter = 0;

	getCurrentCounter(value: number) {
		this.currentCounter = value;
	}
	constructor() {}

	ngOnInit() {}
}
