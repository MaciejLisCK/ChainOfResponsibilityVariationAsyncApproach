import { ProcessManager } from "./ProcessManager";

const processManager = new ProcessManager()
processManager.finished$.subscribe(() => console.log("All surveys are finished."))

processManager.survey1.runningState$.subscribe((s) => console.log("Survey 1 state: ", s))

processManager.start()

setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000);
