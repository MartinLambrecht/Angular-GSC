import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ParentComponent } from "./parent/parent.component";

@NgModule({
	declarations: [AppComponent, ParentComponent],
	imports: [BrowserModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
