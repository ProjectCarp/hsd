export = View;
declare class View {
    names: any;
    getNameStateSync(db: any, nameHash: any): any;
    getNameState(db: any, nameHash: any): Promise<any>;
    toNameUndo(): NameUndo;
}
import NameUndo = require("./undo");
