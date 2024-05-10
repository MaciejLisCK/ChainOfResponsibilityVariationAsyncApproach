import { BehaviorSubject, filter, map } from "rxjs";
import { ProcesState } from "./ProcesState";


export class DashboardProcess {
    state$ = new BehaviorSubject(ProcesState.NotStarted);

    isShouldRunOrSkipState$ = this.state$.pipe(map(s => s === ProcesState.ShouldRunOrSkip));
    isRunningState$ = this.state$.pipe(map(s => s === ProcesState.Running));
    isDoneState$ = this.state$.pipe(map(s => s === ProcesState.Done));
    isSkippedState$ = this.state$.pipe(map(s => s === ProcesState.Skipped));
    isDoneOrSkippedState$ = this.state$.pipe(map(s => s === ProcesState.Done || s === ProcesState.Skipped));

    shouldRunOrSkipState$ = this.isShouldRunOrSkipState$.pipe(filter(v => v));
    runningState$ = this.isRunningState$.pipe(filter(v => v));
    doneState$ = this.isDoneState$.pipe(filter(v => v));
    skippedState$ = this.isSkippedState$.pipe(filter(v => v));
    doneOrSkippedState$ = this.isDoneOrSkippedState$.pipe(filter(v => v));
    
    start(): void {
        this.state$.next(ProcesState.ShouldRunOrSkip);
    }
}
