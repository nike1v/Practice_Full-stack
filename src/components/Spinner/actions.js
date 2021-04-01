import { createAction } from "redux-actions"

export const toggleLoader = createAction("TOGGLE_LOADING")
export const shutDownLoader = createAction("SHUT_DOWN_LOADER")
