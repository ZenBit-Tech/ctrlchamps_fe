import React, { useState } from 'react';
import Step1Form from './step1';

const SignUpPage = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(prevStep => prevStep + 1);
  };

  return (
    <div>
      {step === 1 && <Step1Form onNext={handleNextStep} />}
      {step === 2 && <h1>Next Sign Up Screen</h1>}
      {/* Here othrer steps should be added */}

    </div>
  );
};

export default SignUpPage;
