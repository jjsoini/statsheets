export type DummySheet = {
    id: number;
    name: string;
    description: string;
    notes: string;
    sections: Array<DummySheetSection>;
}

export type DummySheetSection = {
    id: number;
    name: string;
    imageURL: string;
    notes: string;
    stats: Array<DummySheetStats>;
}

export type DummySheetStats = {
    id: number;
    name: string;
    value: string;
}