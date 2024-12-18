import { create } from "zustand"

export type Contact = {
	id?: number;
	name?: string;
	avatar?: string;
}

interface ContactStore {
	contact: Contact,
	setContact: (contact: Contact) => void,
}

const useContactStore = create<ContactStore>((set) => ({
	contact: {},
	setContact: (contact) => set(() => ({ contact }))
}))

export default useContactStore
