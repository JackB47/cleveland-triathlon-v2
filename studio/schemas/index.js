import * as components from './components'
import * as documents from './documents'

const _components = Object.keys(components).map((key) => components[key])
const _documents = Object.keys(documents).map((key) => documents[key])

export const schemaTypes = [..._components, ..._documents]
