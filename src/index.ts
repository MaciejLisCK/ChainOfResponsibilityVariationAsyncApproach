import { filter } from "rxjs";
import { ProcessManager } from "./ProcessManager";

const processManager = new ProcessManager()
processManager.start()

processManager.isFinished.subscribe(() => console.log('finished'))