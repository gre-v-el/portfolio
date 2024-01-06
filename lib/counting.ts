import { CounterAPI } from "counterapi";

export default function hit(name: string) {
	const counter = new CounterAPI();
	counter.up("GabrielMyszkierPortfolioWebsite", name).then(() => {});
}