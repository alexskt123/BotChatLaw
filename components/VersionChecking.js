import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { webConfig } from '../config/settings'
import { useServerConfig } from '../lib/hooks/useFire'
import semver from 'semver'
import { Modal, Button } from 'react-bootstrap'

export default function VersionChecking() {
  //local state for now, will move to global store
  const ServerConfig = useServerConfig()
  const router = useRouter()
  const [updateAvail, setUpdateAvail] = useState(false)

  const updateNow = () => {
    router.reload()
  }

  useEffect(() => {
    const localConfig = localStorage.getItem('web_config') || JSON.stringify(webConfig)

    const serverVersion = ServerConfig.webVersion || webConfig.webVersion
    const webVersion = JSON.parse(localConfig).webVersion

    console.log({ serverVersion, webVersion })

    try {
      if (semver.lt(webVersion, serverVersion)) {
        setUpdateAvail(true)
        localStorage.setItem('web_config', JSON.stringify(ServerConfig))
      }
    } catch (error) {
      console.error(error)
    }

  }, [ServerConfig])

  return updateAvail ? <UpdateModal show={updateAvail} onHide={() => setUpdateAvail(false)} update={() => updateNow()} /> : <Fragment />
}

export function UpdateModal({ show, onHide, update }) {
  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {'Update Available!'}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {'Click "Update Now" to update.'}
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={update}>{'Update Now'}</Button>

        <Button variant="secondary" onClick={onHide}>{'Later'}</Button>
      </Modal.Footer>
    </Modal>
  )
}
