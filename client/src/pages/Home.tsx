import { FormControl, FormLabel, Textarea } from '@mui/joy'
import React, { useState } from 'react'

const Home: React.FC = () => {
  const [bullets, setBullets] = useState<string>()

  return (
    <div data-testid='home.page'>
      <h1>Smarter Bullets</h1>
      <FormControl>
        <FormLabel>Input Bullets Here:</FormLabel>
        <Textarea minRows={2} value={bullets} onChange={(e) => setBullets(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>View Output Here:</FormLabel>
        <Textarea minRows={2} value={bullets} />
      </FormControl>
    </div>
  )
}

export default Home
