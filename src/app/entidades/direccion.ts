export class Direccion {
    constructor(
    public calle:string,
    public numeroExt:string,
    public colonia:string,
    public cp:string,
    public numeroInt?:string,
    public cveMunicipio?:number,
    public cveEstado?:number){

    }
    
}