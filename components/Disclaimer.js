import Jumbotron from 'react-bootstrap/Jumbotron'
import Alert from 'react-bootstrap/Alert'

export default function Disclaimer() {
  return (
    <Jumbotron className="p-3 mt-3">
      <Alert variant="warning" className="p-1 mb-1"><h3>Disclaimer</h3></Alert>
      <p>
        Please read this disclaimer <b>(&quot;disclaimer&quot;)</b> carefully before using this website (&quot;website&quot;, &quot;service&quot;) operated by BotChatLaw (&quot;us&quot;, &quot;we&quot; &quot;our&quot;).
      </p>
      <p>
        The content displayed on the website is the intellectual property of BotChatLaw. You may not reuse, republish, or reprint such content without our written consent.
      </p>
      <p>
        All information posted is merely for educational and informational purposes. It is not intended as a substitute for professional advice. Should you decide to act upon any information on this website, you do so at your own risk.
      </p>
      <p>
        While the information on this website has been verified to the best of our abilities, we cannot guarantee that there are no mistakes or errors.
      </p>
      <p>
        We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.
      </p>
    </Jumbotron>
  )
}
