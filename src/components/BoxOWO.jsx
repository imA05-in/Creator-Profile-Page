//box for objects withing objects

export default function BoxOWO({ label, data }) {
  return (
    <div className="mx-2 bg-neutral-500/50 border border-neutral-300 rounded-2xl p-4 max-w-100 min-h-55">
      <div className="underline decoration-neutral-50/50 pb-4">
        {label}
      </div>

      {Object.entries(data).map((dat) => (
        <div key={dat[0]} className="flex flex-col gap-2">
          <div className="font-medium " >{dat[0]}</div> {/* platform names */}
          {Object.entries(dat[1]).map((value) => (    
            <div 
            key={value}
            className="border-b-gray-100/50 border-b "
            >
            {value[0] }{": "}{value[1]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
