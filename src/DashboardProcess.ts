import { BehaviorSubject, combineLatest, filter } from "rxjs";
import { ProcesState } from "./ProcesState";


export class DashboardProcess {
    public state$ = new BehaviorSubject(ProcesState.NotStarted);

    shouldRunOrSkipState$ = this.state$.pipe(filter(s => s === ProcesState.ShouldRunOrSkip));
    runningState$ = this.state$.pipe(filter(s => s === ProcesState.Running));
    doneState$ = this.state$.pipe(filter(s => s === ProcesState.Done));
    skippedState$ = this.state$.pipe(filter(s => s === ProcesState.Skipped));
    doneOrSkippedState$ = this.state$.pipe(filter(s => s === ProcesState.Done || s === ProcesState.Skipped));

    
    start(): void {
        this.state$.next(ProcesState.ShouldRunOrSkip);
    }
}
