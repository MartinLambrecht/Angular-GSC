import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "titlecase",
})
export class TitleCasePipe implements PipeTransform {
	transform(value: string): string {
		const separetedString = value.split(" ");
		const finalArr = separetedString.map(
			(word) => (word = word[0].toUpperCase() + word.slice(1, word.length))
		);
		const finalSentence = finalArr.join(" ");
		return finalSentence;
	}
}
