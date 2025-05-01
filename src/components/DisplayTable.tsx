import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const DisplayTable = () => {
    return (
        <div>
            <h3 className='text-xl flex justify-center pt-10 pb-6'>Registered Patient Records</h3>
            <Table className='w-full'>
                <TableHeader>
                    <TableRow className="bg-gray-200 border border-gray-300">
                        <TableHead className="text-center border border-gray-300">Patient ID</TableHead>
                        <TableHead className="text-center border border-gray-300">First Name</TableHead>
                        <TableHead className="text-center border border-gray-300">Last Name</TableHead>
                        <TableHead className="text-center border border-gray-300">Date of Birth</TableHead>
                        <TableHead className="text-center border border-gray-300">Sex</TableHead>
                        <TableHead className="text-center border border-gray-300">Height(cm)</TableHead>
                        <TableHead className="text-center border border-gray-300">Weight(kg)</TableHead>
                        <TableHead className="text-center border border-gray-300">Marital Status</TableHead>
                        <TableHead className="text-center border border-gray-300">Patient Email</TableHead>
                        <TableHead className="text-center border border-gray-300">Phone Number</TableHead>
                        <TableHead className="text-center border border-gray-300">Street</TableHead>
                        <TableHead className="text-center border border-gray-300">City</TableHead>
                        <TableHead className="text-center border border-gray-300">State</TableHead>
                        <TableHead className="text-center border border-gray-300">Zip Code</TableHead>
                        <TableHead className="text-center border border-gray-300">Is patient taking any medication?</TableHead>
                        <TableHead className="text-center border border-gray-300">Emergency Contact First Name</TableHead>
                        <TableHead className="text-center border border-gray-300">Emergency Contact Last Name</TableHead>
                        <TableHead className="text-center border border-gray-300">Emergency Contact Relationship</TableHead>
                        <TableHead className="text-center border border-gray-300">Emergency Contact Phone Number</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow>
                        <TableCell className='text-center border border-gray-300'>12345</TableCell>
                        <TableCell className='text-center border border-gray-300'>John</TableCell>
                        <TableCell className='text-center border border-gray-300'>Doe</TableCell>
                        <TableCell className='text-center border border-gray-300'>1990-01-01</TableCell>
                        <TableCell className='text-center border border-gray-300'>Male</TableCell>
                        <TableCell className='text-center border border-gray-300'>180</TableCell>
                        <TableCell className='text-center border border-gray-300'>75</TableCell>
                        <TableCell className='text-center border border-gray-300'>Single</TableCell>
                        <TableCell className='text-center border border-gray-300'>john@example.com</TableCell>
                        <TableCell className='text-center border border-gray-300'>1234567890</TableCell>
                        <TableCell className='text-center border border-gray-300'>123 Main St</TableCell>
                        <TableCell className='text-center border border-gray-300'>Cityville</TableCell>
                        <TableCell className='text-center border border-gray-300'>California</TableCell>
                        <TableCell className='text-center border border-gray-300'>90001</TableCell>
                        <TableCell className='text-center border border-gray-300'>No</TableCell>
                        <TableCell className='text-center border border-gray-300'>Jane</TableCell>
                        <TableCell className='text-center border border-gray-300'>Doe</TableCell>
                        <TableCell className='text-center border border-gray-300'>Sister</TableCell>
                        <TableCell className='text-center border border-gray-300'>9876543210</TableCell>
                    </TableRow>
                </TableBody>



            </Table>

        </div>
    )
}

export default DisplayTable