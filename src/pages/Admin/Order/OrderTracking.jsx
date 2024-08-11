import { useState } from 'react'
import { TiTick } from 'react-icons/ti'

export default function OrderTracking() {
   const [currentStep, setCurrentStep] = useState(1)
   const [complete, setComplete] = useState(false)
  const steps = [
    'Payment',
    'Processing',
    'Packing',
    'Ready to ship',
    'Shipping',
    'Complete',
  ]
  return (
    <>
      <section className="flex items-center justify-center flex-col gap-6 ">
        <p className="text-primaryColor">Order Tracking</p>

        <div className="flex justify-between">
          {steps.map((steps, i) => (
            <div
              key={i}
              className={`step-items ${currentStep === i + 1 && 'active'} ${(i + 1 < currentStep || complete) && 'complete'}`}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
              </div>
              <p className="text-gray-500">{steps}</p>
            </div>
          ))}
        </div>
        {/* {!complete && (
          <button
            className="py-2 px-5 bg-slate-800 text-white rounded"
            onClick={() => {
              currentStep === steps.length
                ? setComplete(true)
                : setCurrentStep(prev => prev + 1)
            }}
          >
            {currentStep === steps.length ? 'Finish' : 'Next'}
          </button>
        )} */}

        <button
          className="py-2 px-5 bg-slate-800 text-white rounded"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep(prev => prev + 1)
          }}
        >
          {currentStep === steps.length ? 'Finish' : 'Next'}
        </button>
      </section>
    </>
  )
}
