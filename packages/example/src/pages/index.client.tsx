import initWidgets from "next-client-script/dist/initWidgets";
import Counter from "components/Counter/Counter.client";
import { gte } from "lodash";

console.log("hello");
const answer = gte(2, 5);
console.log({ answer });

initWidgets([Counter]);
