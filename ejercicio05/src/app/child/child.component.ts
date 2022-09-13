import { Component, EventEmitter, OnInit, Output } from "@angular/core";
@Component({
	selector: "app-child",
	templateUrl: "./child.component.html",
	styleUrls: ["./child.component.css"],
})
export class ChildComponent implements OnInit {
	counter = 0;
	@Output() counterEvent = new EventEmitter<number>();

	constructor() {}

	ngOnInit() {
		setInterval(() => {
			this.counter++;
		}, 1000);
	}

	buttonClicked(): void {
		this.counterEvent.emit(this.counter);
	}
}
