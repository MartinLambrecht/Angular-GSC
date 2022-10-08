import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";

@Component({
	selector: "app-parent",
	templateUrl: "./parent.component.html",
	styleUrls: ["./parent.component.css"],
})
export class ParentComponent implements OnInit {
	obs;
	result: number;
	promise: Promise<number>;

	constructor() {
		this.obs = of(35);
	}

	ngOnInit(): void {
		this.promise = new Promise((resolve, reject) => {
			this.obs.subscribe((value: number) => {
				resolve(value);
			});
		});
	}

	listen(): void {
		this.promise.then((val) => {
			this.result = val;
		});
	}
}
