
import { Fragment } from 'react';
import { useInfo } from '../lib/hooks/useIntentInfo'

import { getLinks } from '../lib/dataProcess'

export default function StepMessage(steps) {

  const { other: step } = steps.steps;
  const { value: StepValue } = step

  const links = useInfo ('stepLink', steps, StepValue)
  const listLinks = getLinks (links)

  return (
    <Fragment>
      <div style={{ width: '100%' }}>
        <h4>請點擊以下連結以獲取更多的資訊:</h4>
        {listLinks}
      </div>
    </Fragment>

  );
}
