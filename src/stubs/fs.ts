// @ts-ignore
import preflight from "tailwindcss/lib/css/preflight.css";

export default {
  // Reading the preflight CSS is the only use of fs at the moment of writing.
  readFileSync: () => preflight,
};
