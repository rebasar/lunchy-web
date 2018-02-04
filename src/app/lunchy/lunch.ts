export class Lunch {
    items: LunchItem[];
    validFrom: string;
    validUntil: string;
}

export class LunchItem {
    title: string;
    descsription: string;
    price: number;
}
