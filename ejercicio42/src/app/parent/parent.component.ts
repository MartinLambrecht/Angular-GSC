import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { from, Observable } from "rxjs";

@Component({
	selector: "app-parent",
	templateUrl: "./parent.component.html",
	styleUrls: ["./parent.component.css"],
})
export class ParentComponent implements OnInit {
	movieList!: Movie[]; // Corregir

	constructor(private http: HttpClient) {}

	ngOnInit() {}

	makeRequest() {
		this.http.get("https://swapi.dev/api/films/").subscribe((m: any) => {
			this.movieList = m.results;
		});
	}
}

export interface Movie {
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: Date;
	characters: string[];
	planets: string[];
	starships: string[];
	vehicles: string[];
	species: string[];
	created: Date;
	edited: Date;
	url: string;
}
