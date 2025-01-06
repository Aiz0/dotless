import { Variable, bind } from "astal";

export default ({
  variable,
  icon,
}: {
  variable: Variable<number>;
  icon: string;
}) => {
  return (
    <overlay>
      <circularprogress
        tooltipText={variable((v) => `${Math.floor(v * 100)}%`)}
        value={bind(variable)}
        startAt={0.75}
        endAt={0.75} // needs to be same as above for full circle
        rounded
        className="text-[0.25rem] text-pink-400 bg-slate-700"
      >
      </circularprogress>
      <label label={icon} className="text-2xl text-pink-400" />
    </overlay>
  );
};
