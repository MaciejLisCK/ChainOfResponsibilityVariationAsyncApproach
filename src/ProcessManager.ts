import { BehaviorSubject, combineLatest, map, startWith } from "rxjs";
import Survey1 from "./Survey1";
import Survey2 from "./Survey2";
import Survey3 from "./Survey3";
import Survey4 from "./Survey4";
import { ProcesState } from "./ProcesState";


export class ProcessManager {
    survey1 = new Survey1();
    survey2 = new Survey2();
    survey3 = new Survey3();
    survey4 = new Survey4();

    isFinished = combineLatest([
        this.survey1.isDoneOrSkippedState$,
        this.survey2.isDoneOrSkippedState$,
        this.survey3.isDoneOrSkippedState$,
        this.survey4.isDoneOrSkippedState$,
    ]).pipe(
        map(([a,b,c,d]) => a && b && c && d)
    );
    
    constructor() {
        this.survey1.doneOrSkippedState$.subscribe(() => this.survey2.start());
        this.survey2.doneOrSkippedState$.subscribe(() => this.survey3.start());
        this.survey3.doneOrSkippedState$.subscribe(() => this.survey4.start());
    }

    start() {
        this.survey1.start();
    }
} 
