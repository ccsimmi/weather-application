export default function Card({ label, unit, number }) {
  return (
    <div className="bg-slate-100 flex items-baseline justify-between p-2 mb-2 rounded-sm">
      <h2>{label}</h2>
      <p className="text-xl font-semibold">
        {number ? number : 0}
        <span className="font-normal text-base">{"\x20" + unit}</span>
      </p>
    </div>
  );
}
