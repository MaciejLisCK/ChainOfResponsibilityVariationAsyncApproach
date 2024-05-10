import { ProcessManager } from "./ProcessManager";

const processManager = new ProcessManager()
processManager.start()

processManager.finished$.subscribe(() => console.log('finished'))