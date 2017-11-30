import React from 'react'

import Status from '../Status'

export default function Forbidden({ children }) {
  return <Status code={403}>{children}</Status>
}
