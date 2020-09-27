
import { Fragment } from 'react';

import props from 'prop-types';

export default function Button(props) {


  // const buttons = props => (
  //     <button onClick={() => props.triggerNextStep({trigger: 'dynamicallyReachedStep'})}>
  //       Click me to go to the next step
  //     </button>
  // );

  return (
    <Fragment>
      <button onClick={() => props.triggerNextStep({trigger: 'dynamicallyReachedStep'})}>
        Click me to go to the next step
      </button>
    </Fragment>
    
  )
}