import Widget from "resource:///com/github/Aylur/ags/widget.js";

const base = "rounded-full text-lg duration-200 min-w-[30px] min-h-[30px] ";
const normal = "text-white hover:bg-slate-700 active:bg-slate-600 ";

export default ({ ...rest }) =>
  Widget.Button({
    cursor: "pointer",
    class_name: base + normal,
    attribute: {
      urgent: false,
      selected: false,
      inactive: false,
    },
    setup: (self) =>
      self.on("notify::attribute", () => {
        if (self.attribute.urgent) {
          self.class_name =
            base + "bg-red-600 hover:bg-slate-900 active:bg-slate-800";
        } else if (self.attribute.selected) {
          self.class_name =
            base + "bg-pink-500 hover:bg-pink-600 active:bg-pink-700";
        } else if (self.attribute.inactive) {
          self.class_name = base + normal + "opacity-35";
        } else {
          self.class_name = base + normal;
        }
      }),
    ...rest,
  });
