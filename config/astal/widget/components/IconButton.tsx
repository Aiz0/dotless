import { Binding, Variable } from "astal";
import { Widget, Gdk } from "astal/gtk4";

export interface IconButtonProps extends Widget.ButtonProps {
  urgent?: Binding<boolean> | boolean;
  selected?: Binding<boolean> | boolean;
  inactive?: Binding<boolean> | boolean;
  child?: JSX.Element;
}

export default function IconButton({
  urgent = false,
  selected = false,
  inactive = false,
  onToggled,
  setup,
  child,
  ...props
}: IconButtonProps) {
  urgent = urgent instanceof Binding ? urgent : Variable(urgent)();
  selected = selected instanceof Binding ? selected : Variable(selected)();
  inactive = inactive instanceof Binding ? inactive : Variable(inactive)();
  const classes = Variable.derive(
    [urgent, selected, inactive],
    (urgent, selected, inactive) => {
      const classes = [
        "rounded-full",
        "text-lg",
        "duration-200",
        "min-w-[30px]",
        "min-h-[30px]",
      ];
      urgent
        ? classes.push(
            "bg-red-600",
            "hover:bg-slate-900",
            "active:bg-slate-800",
          )
        : selected
          ? classes.push(
              "bg-pink-500",
              "hover:bg-pink-600",
              "active:bg-pink-700",
            )
          : inactive
            ? classes.push(
                "opacity-35",
                "text-white",
                "hover:bg-slate-700",
                "active:bg-slate-600",
              )
            : classes.push(
                "text-white",
                "hover:bg-slate-700",
                "active:bg-slate-600",
              );
      return classes;
    },
  );

  return (
    <box>
      <button
        {...props}
        // cursor="pointer"
        cursor={Gdk.Cursor.new_from_name("pointer", null)}
        cssClasses={classes()}
      >
        {child}
      </button>
    </box>
  );
}
