import { BehaviorSubject, distinctUntilChanged, filter, map, mapTo, tap } from "rxjs";
import { ProcesState } from "./ProcesState";


export abstract class DashboardProcess {
    state$ = new BehaviorSubject(ProcesState.NotStarted);

    isShouldRunOrSkipState$ = this.state$.pipe(map(s => s === ProcesState.ShouldRunOrSkip), distinctUntilChanged());
    isRunningState$ = this.state$.pipe(map(s => s === ProcesState.Running), distinctUntilChanged());
    isDoneState$ = this.state$.pipe(map(s => s === ProcesState.Done), distinctUntilChanged());
    isSkippedState$ = this.state$.pipe(map(s => s === ProcesState.Skipped), distinctUntilChanged());
    isDoneOrSkippedState$ = this.state$.pipe(map(s => s === ProcesState.Done || s === ProcesState.Skipped), distinctUntilChanged());

    shouldRunOrSkipState$ = this.isShouldRunOrSkipState$.pipe(filter(Boolean), map<boolean, void>(() => { }));
    runningState$ = this.isRunningState$.pipe(filter(Boolean), map<boolean, void>(() => { }));
    doneState$ = this.isDoneState$.pipe(filter(Boolean), map<boolean, void>(() => { }));
    skippedState$ = this.isSkippedState$.pipe(filter(Boolean), map<boolean, void>(() => { }));
    doneOrSkippedState$ = this.isDoneOrSkippedState$.pipe(filter(Boolean), map<boolean, void>(() => { }));
    
    constructor() {
        this.shouldRunOrSkipState$.subscribe({ next: () => this.shouldRunOrSkip() });
        this.runningState$.subscribe({ next: () => this.running() });
        this.skippedState$.subscribe({ next: () => this.skipped() })
        this.doneState$.subscribe({ next: () => this.done() });

        this.doneOrSkippedState$.subscribe({ next: () => this.state$.complete() });
    }

    start(): void {
        this.state$.next(ProcesState.ShouldRunOrSkip);
    }

    abstract shouldRunOrSkip(): void
    abstract running(): void
    abstract skipped(): void
    abstract done(): void
}
