import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { webConfig, versionCheckingModalConfig } from '../config/settings'
import { useServerConfig } from '../lib/hooks/useFire'
import semver from 'semver'

import Swal from 'sweetalert2'

export default function VersionChecking() {
  //local state for now, will move to global store
  const ServerConfig = useServerConfig()
  const router = useRouter()
  const [updateAvail, setUpdateAvail] = useState(false)

  const updateNow = () => {
    router.reload()
  }

  const sweetModal = async () => {
    let result = await Swal.fire({
      ...versionCheckingModalConfig,
      didOpen: (modal) => {
        modal.addEventListener('mouseenter', Swal.stopTimer)
        modal.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    setUpdateAvail(false)

    if (result.isConfirmed) {
      updateNow()
    }
  }

  useEffect(() => {
    const localConfig = localStorage.getItem('web_config') || JSON.stringify(webConfig)

    const serverVersion = ServerConfig.webVersion || webConfig.webVersion
    const webVersion = JSON.parse(localConfig).webVersion

    try {
      if (semver.lt(webVersion, serverVersion)) {
        setUpdateAvail(true)
        localStorage.setItem('web_config', JSON.stringify(ServerConfig))
      }
    } catch (error) {
      localStorage.removeItem('web_config')
      console.error(error)
    }

  }, [ServerConfig])

  if (updateAvail) {
    sweetModal()
  }

  return ''
}
