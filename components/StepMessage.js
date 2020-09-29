
import { setIntentInfo } from '../lib/hooks/useIntentInfo'


export default function StepMessage (steps ) {

  const { other: step} = steps.steps;
  const { value: StepValue } = step

  const data = setIntentInfo ('stepMessage', steps, StepValue)

  return (
    <div style={{ width: '100%' }}>
      {data}
    </div>
  );
}
