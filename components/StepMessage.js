
import { useInfo } from '../lib/hooks/useIntentInfo'
import { getDataPopulate } from '../lib/dataProcess'


export default function StepMessage (steps ) {

  const { other: step} = steps.steps;
  const { value: StepValue } = step

  const data = useInfo ('stepMessage', steps, StepValue)

  return (
    getDataPopulate(data)
  );
}
