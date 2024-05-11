import { ProcessManager } from "./ProcessManager";

const processManager = new ProcessManager()
processManager.finished$.subscribe(() => console.log("All surveys are finished."))

processManager.start()
