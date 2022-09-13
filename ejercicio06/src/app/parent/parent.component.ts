import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ChildComponent } from "../child/child.component";

@Component({
	selector: "app-parent",
	templateUrl: "./parent.component.html",
	styleUrls: ["./parent.component.css"],
})
export class ParentComponent implements OnInit {

	constructor() {}

  @ViewChild(ChildComponent) child:ChildComponent;
  callChild(){
    this.child.stopTimer()
  }

	ngOnInit() {}
}
