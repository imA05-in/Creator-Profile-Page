export default function Box({data, label}){
    return(
        <div className="mx-2 bg-neutral-500/50 border border-neutral-300 rounded-2xl p-4 max-w-100 min-h-55">
      <div className="underline decoration-neutral-50/50 pb-4">
      {label}
      </div>
      <div className="flex flex-col gap-2">
        {Object.entries(data).map((key) => (
          <div 
          className="border-b-gray-100/50 border-b"
          key={key}>
            {`${key[0]}: ${key[1]}`}
          </div>
        ))}
      </div>
    </div>
    )
}