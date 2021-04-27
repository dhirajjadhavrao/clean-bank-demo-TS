export class Branch {
    id!: number;
    code!: number;
    name!: string;
    city!: string;

    constructor(id:number, code:number, name:string, city:string){
        this.name = name;
        this.id = id;
        this.code = code;
        this.city = city;
    }
}