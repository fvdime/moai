import {create} from 'zustand'

interface SettingsModalProps {
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void
}

const useSettingsModal = create<SettingsModalProps>((set) => ({
  isOpen: false, onOpen: () => set({isOpen: true}), onClose: () => set({isOpen: false})
}))

export default useSettingsModal