export = NameUndo;
declare class NameUndo {
    static fromView(view: any): NameUndo;
    names: any[];
    fromView(view: any): NameUndo;
    getSize(): number;
    write(bw: any): any;
    read(br: any): NameUndo;
}
