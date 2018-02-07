export class Lunch {
    items: LunchItem[];
    validFrom: string;
    validUntil: string;
}

export class LunchItem {
    title: string;
    description: string;
    price: number;
}
