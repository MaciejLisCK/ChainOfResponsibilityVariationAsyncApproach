import { ProcesState } from "./ProcesState";
import { DashboardProcess } from "./DashboardProcess";

export default class Survey2 extends DashboardProcess {
    constructor() {
        super();
        this.shouldRunOrSkipState$.subscribe({ next: () => this.shouldRunOrSkip() });
        this.runningState$.subscribe({ next: () => this.running() });
        this.skippedState$.subscribe({next: () => this.skipped() })
        this.doneState$.subscribe({ next: () => this.done() });
    }

    shouldRunOrSkip(): void {
        console.log("2 Run or skip");
        this.state$.next(ProcesState.Running);
    }

    running(): void {
        console.log("2 Run");
        this.state$.next(ProcesState.Done);
    }

    done(): void {
        console.log("2 Done");
    }

    skipped(): void {
        console.log("2 Skipped");
    }

}
