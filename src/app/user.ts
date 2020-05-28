export class User{
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public Body: Body[]
    ){}
}

export class Body{
    constructor(
        public nationality:string,
        public Age: Age[]
    ){}

}

export class Age{
    constructor(
        public year: number,
        public month: string
    ){}
}