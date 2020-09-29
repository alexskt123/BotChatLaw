
import { useInfo } from '../lib/hooks/useIntentInfo'
import { getDataPopulate } from '../lib/dataProcess'


export default function Others( steps ) {

  const { other: step } = steps.steps;  
  const { value: StepValue } = step

  const data = useInfo ('componentOther', steps, StepValue)

  return (    
    getDataPopulate(data)
  );
}
