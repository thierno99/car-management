export enum Color {
    RED, GREEN, BLUE, YELLOW, BLACK, BROWN, WHITE, PINK, PURPLE, CYAN, GRAY, UNDEFINED,
}

export interface CarI {
    id: number;

    model: string;
    brand: string;
    createdAt: number;
    ch: number;
    // colors: Color[];
    picture: String;
}

export class Car implements CarI{
    id!: number;
    constructor (
        public model: string="",
        public brand: string="",
        public createdAt: number= 0,
        public ch: number= 0,
        // public colors: Color[]=[],
        public picture: String=""
    ){
        this.model=model;
        this.brand=brand;
        this.createdAt =createdAt;
        this.ch = ch;
        // this.colors = colors;
        this.picture = picture;
    }
    
    
}
