
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { PatientRecord } from "@/App";

interface DisplayTableProps {
    patientRecords: PatientRecord[];
}
const DisplayTable: React.FC<DisplayTableProps> = ({ patientRecords }) => {

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

                    {patientRecords.map((item, key) => (
                        <TableRow key={key} >
                            <TableCell className='text-center border border-gray-300'>{item.id}</TableCell>
                            <TableCell className='text-center border border-gray-300'>{item.firstname}</TableCell>
                            <TableCell className='text-center border border-gray-300'>{item.lastname}</TableCell>
                            <TableCell className='text-center border border-gray-300'>{item.dateofbirth}</TableCell>
                            <TableCell className='text-center border border-gray-300'>{item.sex}</TableCell>
                            <TableCell className='text-center border border-gray-300'>{item.height}</TableCell>
                            <TableCell className='text-center border border-gray-300'>{item.weight}</TableCell>
                            <TableCell className='text-center border border-gray-300'>{item.maritalstatus}</TableCell>
                            <TableCell className='text-center border border-gray-300'>{item.contact_email}</TableCell>
                            <TableCell className='text-center border border-gray-300'>{item.contact_phone}</TableCell>
                            <TableCell className='text-center border border-gray-300'>{item.address_street}</TableCell>
                            <TableCell className='text-center border border-gray-300'>{item.address_city}</TableCell>
                            <TableCell className='text-center border border-gray-300'>{item.address_state}</TableCell>
                            <TableCell className='text-center border border-gray-300'>{item.address_zip}</TableCell>
                            <TableCell className='text-center border border-gray-300'>{item.takingmedications}</TableCell>
                            <TableCell className='text-center border border-gray-300'>{item.emergencycontact_firstname}</TableCell>
                            <TableCell className='text-center border border-gray-300'>{item.emergencycontact_lastname}</TableCell>
                            <TableCell className='text-center border border-gray-300'>{item.emergencycontact_relationship}</TableCell>
                            <TableCell className='text-center border border-gray-300'>{item.emergencycontact_phone}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>



            </Table>

        </div>
    )
}

export default DisplayTable