import { Binding, Variable } from "astal";
import { Widget } from "astal/gtk3";

export interface IconButtonProps extends Widget.ButtonProps {
  urgent?: Binding<boolean> | boolean;
  selected?: Binding<boolean> | boolean;
  inactive?: Binding<boolean> | boolean;
  child?: JSX.Element;
}

const base = "rounded-full text-lg duration-200 min-w-[30px] min-h-[30px] ";
const normal = "text-white hover:bg-slate-700 active:bg-slate-600 ";

export default function IconButton({
  urgent = false,
  selected = false,
  inactive = false,
  onToggled,
  setup,
  child,
  ...props
}: IconButtonProps) {
  const innerState = Variable({
    urgent: urgent instanceof Binding ? urgent.get() : urgent,
    selected: selected instanceof Binding ? selected.get() : selected,
    inactive: inactive instanceof Binding ? inactive.get() : inactive,
  });

  return (
    <box>
      <button
        {...props}
        cursor="pointer"
        className={base + normal}
        setup={(self) => {
          setup?.(self);
          function setupButton() {
            if (innerState.get().urgent) {
              self.className =
                base + "bg-red-600 hover:bg-slate-900 active:bg-slate-800";
            } else if (innerState.get().selected) {
              self.className =
                base + "bg-pink-500 hover:bg-pink-600 active:bg-pink-700";
            } else if (innerState.get().inactive) {
              self.className = base + normal + "opacity-35";
            } else {
              self.className = base + normal;
            }
          }
          setupButton();
          self.hook(innerState, () => {
            setupButton();
          });
          if (urgent instanceof Binding) {
            self.hook(urgent, () =>
              innerState.set({ ...innerState.get(), urgent: urgent.get() }),
            );
          }
          if (selected instanceof Binding) {
            self.hook(selected, () =>
              innerState.set({ ...innerState.get(), selected: selected.get() }),
            );
          }
          if (inactive instanceof Binding) {
            self.hook(inactive, () =>
              innerState.set({ ...innerState.get(), inactive: inactive.get() }),
            );
          }
        }}
      >
        {child}
      </button>
    </box>
  );
}
