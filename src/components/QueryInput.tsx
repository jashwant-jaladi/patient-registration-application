import { Input } from './ui/input'
import { Button } from './ui/button'
import { useState } from 'react'

interface QueryInputProps {
  setQuery: (query: string) => void
}

const QueryInput: React.FC<QueryInputProps> = ({ setQuery }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()  
    setQuery(input)
    setInput('')
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex gap-4 items-center justify-center p-8 w-[50%]"
      >
        <Input
          type="text"
          placeholder="Enter your query here..."
          className="bg-gray-800 text-white border border-gray-600 rounded-lg p-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          type="submit"
          className="bg-amber-600 text-white rounded-lg hover:bg-amber-800 focus:outline-none focus:ring-2"
        >
          Submit
        </Button>
      </form>
    </div>
  )
}


export default QueryInput
