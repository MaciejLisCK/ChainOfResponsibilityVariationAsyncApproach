import { ProcesState } from "./ProcesState";
import { DashboardProcess } from "./DashboardProcess";

export default class Survey3 extends DashboardProcess {
    constructor() {
        super();
    }

    shouldRunOrSkip(): void {
        console.log("3 Run or skip");
        this.state$.next(ProcesState.Skipped);
    }

    running(): void {
        console.log("3 Run");
        this.state$.next(ProcesState.Done);
    }

    done(): void {
        console.log("3 Done");
    }

    skipped(): void {
        console.log("3 Skipped");
    }

}
