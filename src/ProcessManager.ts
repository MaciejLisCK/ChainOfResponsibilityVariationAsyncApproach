import { forkJoin } from "rxjs";
import Survey1 from "./Survey1";
import Survey2 from "./Survey2";
import Survey3 from "./Survey3";
import Survey4 from "./Survey4";

export class ProcessManager {
    survey1 = new Survey1()
    survey2 = new Survey2()
    survey3 = new Survey3()
    survey4 = new Survey4()
    
    finished$ = this.getFinished$();
    
    constructor() {
        this.survey1.state$.subscribe({ complete: () => this.survey2.start() });
        this.survey2.state$.subscribe({ complete: () => this.survey3.start() });
        this.survey3.state$.subscribe({ complete: () => this.survey4.start() });
    }
    
    start() {
        this.survey1.start();
    }
    
    private getFinished$() {
        return forkJoin([
            this.survey1.state$,
            this.survey2.state$,
            this.survey3.state$,
            this.survey4.state$,
        ]);    
    }
} 
