
import { useInfo } from '../lib/hooks/useIntentInfo'
import { getDataPopulate , getStepValue } from '../lib/dataProcess'


export default function Others( steps ) {

  const StepValue = getStepValue(steps)
  const data = useInfo ('componentOther', steps, StepValue)

  return (    
    getDataPopulate(data)
  );
}
