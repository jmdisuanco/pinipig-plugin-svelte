import { writable } from 'svelte/store'

let state = {
  page: writable(), //used by router
}

export default state
