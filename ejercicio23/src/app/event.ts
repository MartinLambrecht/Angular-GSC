export interface Event {
	name: string;
	date: string;
	time: string;
	location: {
		address: string;
		city: string;
		country: string;
	};
}
