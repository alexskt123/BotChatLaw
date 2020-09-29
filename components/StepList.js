
import { Fragment } from 'react';
import { useInfo } from '../lib/hooks/useIntentInfo'

import { getList , getStepValue } from '../lib/dataProcess'

export default function StepMessage(steps) {

  const StepValue = getStepValue(steps)

  const list = useInfo ('stepList', steps, StepValue)
  const listList = getList (list, steps)

  return (
    <Fragment>
      <div style={{ width: '100%' }}>
        <h4>你可能對以下嘅野有興趣:</h4>
        {listList}
      </div>
    </Fragment>

  );
}
