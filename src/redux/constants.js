const initialUser = {
  name: null,
  email: null,
};
const initialAuth = {
  user: initialUser,
  token: null,
};

const initialFilter = {
  search: '',
};
const initialPhonebook = {
  contacts: [],
  filter: initialFilter,
};

const initialStore = {
  auth: initialAuth,
  phonebook: initialPhonebook,
};

export const CONST = {
  initialUser,
  initialAuth,
  initialFilter,
  initialPhonebook,
  initialStore,
  BASE_URL: 'https://connections-api.herokuapp.com',
  icon: {
    clear: '❌',
    delete: '🗑',
    add: '➕',
    working: '🛠',
    search: '🔎',
    pin: '📌',
  },
};
