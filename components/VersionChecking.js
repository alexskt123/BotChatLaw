import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { webConfig } from '../config/settings'
import { useServerConfig } from '../lib/hooks/useFire'
import semver from 'semver'

export default function VersionChecking() {
  //local state for now, will move to global store
  const ServerConfig = useServerConfig()
  const router = useRouter()

  useEffect(() => {
    const localConfig = localStorage.getItem('web_config') || JSON.stringify(webConfig)

    const serverVersion = ServerConfig.webVersion || webConfig.webVersion
    const webVersion = JSON.parse(localConfig).webVersion

    try {
      if (semver.lt(webVersion, serverVersion)) {
        localStorage.setItem('web_config', JSON.stringify(ServerConfig))
        router.reload()
      }
    } catch (error) {
      console.error(error)
    }

  }, [ServerConfig])

  return ''
}
