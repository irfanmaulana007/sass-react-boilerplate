export const setToken = (token) => { localStorage.setItem('token', token) }
export const setRole = (role) => { localStorage.setItem('role', role) }
export const setUser = (user) => { localStorage.setItem('user', JSON.stringify(user)) }

export const getToken = () => { return localStorage.getItem('token') }
export const getRole = () => { return localStorage.getItem('role') }
export const getUser = () => { return JSON.parse(localStorage.getItem('user')) }