
import { useInfo } from '../lib/hooks/useIntentInfo'
import { getDataPopulate , getStepValue } from '../lib/dataProcess'


export default function StepMessage (steps ) {

  const StepValue = getStepValue(steps)

  const data = useInfo ('stepMessage', steps, StepValue)

  return (
    getDataPopulate(data)
  );
}
