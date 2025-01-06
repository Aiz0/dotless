import { App } from "astal/gtk3";
import { exec } from "astal";
import Bar from "./widget/Bar/Bar";

const style = exec(`bash -c "
bunx tailwindcss -i main.css |
sed -r 's/:(\\w+)/__\\1__/g' |
bunx postcss |
sed -r 's/__(\\w+)__/:\\1/g'
"`);

App.start({
  css: style,
  main() {
    App.get_monitors().map(Bar);
  },
});
