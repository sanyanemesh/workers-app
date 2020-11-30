export const JOBS = "jobs"
export const EMPLOYEES = "providers"

const ENDPOINTS = {
  [JOBS]: {
    uri: '/jobs',
    method: 'GET'
  },
  [EMPLOYEES]: {
    uri: '/providers',
    method: 'GET'
  }
}

export default ENDPOINTS;