import { FunctionalComponent } from 'preact';
import { List } from './list';

enum DayOfTheWeek {
	Sunday,
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday
}
type DayString = keyof typeof DayOfTheWeek;

interface Day {
	label: DayString;
	value: DayOfTheWeek;
}

const days = Object.keys(DayOfTheWeek as object).reduce((acc: Day[], k: string) => {
	if (Number.isNaN(+k)) {
		return acc.concat({ label: k as DayString, value: DayOfTheWeek[k as DayString] });
	}

	return acc;
}, [] as Day[]);

export const ListRoute: FunctionalComponent<{}> = () => <List items={days} onClick={(d) => console.log(d)} />;
