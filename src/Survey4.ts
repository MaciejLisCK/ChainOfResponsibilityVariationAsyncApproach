import { ProcesState } from "./ProcesState";
import { DashboardProcess } from "./DashboardProcess";

export default class Survey4 extends DashboardProcess {
    constructor() {
        super();
    }

    shouldRunOrSkip(): void {
        console.log("4 Run or skip");
        this.state$.next(ProcesState.Running);
    }

    running(): void {
        console.log("4 Run");
        this.state$.next(ProcesState.Done);
    }

    done(): void {
        console.log("4 Done");
    }

    skipped(): void {
        console.log("4 Skipped");
    }
}
