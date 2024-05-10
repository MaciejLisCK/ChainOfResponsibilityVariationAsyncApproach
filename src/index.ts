import Survey1 from "./Survey1";
import Survey2 from "./Survey2";
import Survey3 from "./Survey3";
import Survey4 from "./Survey4";

const survey1 = new Survey1();
const survey2 = new Survey2();
const survey3 = new Survey3();
const survey4 = new Survey4();

survey1.start()
survey1.doneOrSkippedState$.subscribe(() => survey2.start());
survey2.doneOrSkippedState$.subscribe(() => survey3.start());
survey3.doneOrSkippedState$.subscribe(() => survey4.start());
survey4.doneOrSkippedState$.subscribe(() => console.log('all done'));
