import { useScreenSize } from 'valaxy'
import type { ThemeConfig } from '../types'
import { initLenis } from '../plugins/lenis'
import { useSakuraAppStore } from '../stores'
import { getLocalStorageItem, getSessionStorageItem } from '../utils/storage'
import { StorageKeys } from '../enum'

export function defineSakuraSetup(themeConfig: ThemeConfig) {
  const sakuraAppStore = useSakuraAppStore()
  const { isMd } = useScreenSize()

  if (themeConfig.scrollDamping && !isMd)
    initLenis()

  // SidebarOptions
  const sidebarOptions = themeConfig.sidebarOptions!
  if (sidebarOptions.persistence === 'permanent') {
    sakuraAppStore.sidebar.isOpen = getLocalStorageItem(StorageKeys.IS_SIDEBAR_OPEN) || sidebarOptions.initialState
  }
  else if (sidebarOptions.persistence === 'session') {
    sakuraAppStore.sidebar.isOpen = getSessionStorageItem(StorageKeys.IS_SIDEBAR_OPEN) || sidebarOptions.initialState
  }
  else {
    sakuraAppStore.sidebar.isOpen = sidebarOptions.initialState!
  }
}
