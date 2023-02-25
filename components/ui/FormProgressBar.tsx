interface Props {
  steps: string[];
  currentStep: number;
}

export default function FormProgressBar({ steps, currentStep }: Props)  {
  return (
    <div className="relative w-full z-10 flex justify-between my-2">
      {steps.map((step, i) => {
        return (
          <div key={step} className="flex flex-col">
            <div className={`w-4 h-4 rounded-full bg-neutral-200 z-10 ${currentStep === i + 1 ? 'ring-4 ring-neutral-400' : ''}`} />
            <span className="hidden">{step}</span>
          </div>
        )
      })}
      <div className="absolute top-1.5 w-full z-0 h-0.5 bg-neutral-200"></div>
    </div>
  )
}