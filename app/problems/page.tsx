// Components
import { SheetsCard } from "@/components";

export default function Problems() {
  return (
    <div className="h-100 w-100 flex items-start gap-8 my-5">
      <div className="w-2/3">
        <p>
          {`We believe in the power of consistent practice. The "3 Problems a Day" approach might seem simple, but it's a proven method to nurture gradual improvement. Each day, you'll be presented with three handpicked problems that range in difficulty. This incremental approach ensures you stay challenged while steadily progressing towards mastery.`}
        </p>
        <div className="my-10 flex flex-wrap gap-4">
          <SheetsCard title={""} />
          <SheetsCard title={""} />
          <SheetsCard title={""} />
        </div>
      </div>
      <div className="w-1/3 bg-gray-300">
        <div className="border-2 grid place-content-center h-[300px]">
          Line Graph
        </div>
        <div className="border-2 grid place-content-center h-[200px]">
          Calendar
        </div>
      </div>
    </div>
  );
}
