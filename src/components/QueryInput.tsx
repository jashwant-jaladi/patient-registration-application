import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const QueryInput = () => {
  return (
    <div className="flex items-center justify-center"> 
      <div className="flex gap-4 items-center justify-center p-8 w-[50%]">
        <Input
          type="text"
          placeholder="Enter your query here..."
          className="bg-gray-800 text-white border border-gray-600 rounded-lg p-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button
          className="bg-amber-600 text-white rounded-lg hover:bg-amber-800 focus:outline-none focus:ring-2"
          onClick={() => {
            // Handle button click
            console.log('Button clicked!')
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default QueryInput
