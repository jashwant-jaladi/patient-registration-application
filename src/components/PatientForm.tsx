import { Card } from './ui/card'
import { useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),

  dateOfBirth: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: 'Date of birth must be a valid date',
    })
    .refine((val) => new Date(val) < new Date(), {
      message: 'Date of birth must be in the past',
    }),

  sex: z.enum(['Male', 'Female', 'Other'], {
    required_error: 'Sex is required',
  }),

  Height: z
    .coerce.number({ invalid_type_error: 'Height must be a number' })
    .min(0, { message: 'Height must be a positive number' }),

  Weight: z
    .coerce.number({ invalid_type_error: 'Weight must be a number' })
    .min(0, { message: 'Weight must be a positive number' }),

  MaritalStatus: z.enum(['Single', 'Married', 'Divorced', 'Widowed'], {
    required_error: 'Marital status is required',
  }),

  contact: z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    phone: z.string().regex(/^\d{10}$/, {
      message: 'Invalid phone number',
    }),
  }),

  address: z.object({
    street: z.string().min(1, { message: 'Street address is required' }),
    city: z.string().min(1, { message: 'City is required' }),
    state: z.string().min(1, { message: 'State is required' }),
    zip: z.string().regex(/^\d{6}$/, { message: 'Invalid ZIP code' }),
  }),

  takingMedications: z.enum(['Select','Yes', 'No'], {
    required_error: 'This field is required',
  }),

  emergencyContact: z.object({
    firstname: z.string().min(1, { message: 'First name is required' }),
    lastname: z.string().min(1, { message: 'Last name is required' }),
    relationship: z.string().min(1, { message: 'Relationship is required' }),
    phone: z.string().regex(/^\d{10}$/, { message: 'Invalid phone number' }),
  }),
})

type FormSchemaType = z.infer<typeof formSchema>

function onSubmit(values: FormSchemaType) {
  try {
    console.log('Submitted values:', values);
  } catch (error) {
    console.error('Submission error:', error);
  }
}



const PatientForm = () => {
 
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',

      sex: 'Male',
      Height: 0,
      Weight: 0,
      MaritalStatus: 'Single',

      contact: {
        email: '',
        phone: '',
      },

      address: {
        street: '',
        city: '',
        state: '',
        zip: '',
      },

      takingMedications: 'Select',

      emergencyContact: {
        firstname: '',
        lastname: '',
        relationship: '',
        phone: '',
      },
    },
  })

  return (
    <div className="flex justify-center pt-10">
<Card className="w-1/2 p-6 bg-neutral-900 text-gray-100 shadow-xl rounded-xl">
  <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

      {/* Personal Info */}
      <div className="grid grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="dateOfBirth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sex"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sex</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Height"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Height (cm)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Height" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight (kg)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Weight" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="MaritalStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Marital Status</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Single">Single</SelectItem>
                    <SelectItem value="Married">Married</SelectItem>
                    <SelectItem value="Divorced">Divorced</SelectItem>
                    <SelectItem value="Widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <hr className="my-4 border-gray-700" />

      {/* Contact Info */}
      <div className="grid grid-cols-2 gap-4">
        {["contact.email", "contact.phone", "address.street", "address.city", "address.state", "address.zip"].map((name, i) => (
          <FormField
            key={name}
            control={form.control}
            name={name as any}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {{
                    "contact.email": "Email",
                    "contact.phone": "Phone",
                    "address.street": "Street Address",
                    "address.city": "City",
                    "address.state": "State",
                    "address.zip": "ZIP Code"
                  }[name]}
                </FormLabel>
                <FormControl>
                  <Input placeholder={{
                    "contact.email": "Email",
                    "contact.phone": "Phone",
                    "address.street": "Street",
                    "address.city": "City",
                    "address.state": "State",
                    "address.zip": "ZIP"
                  }[name]} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>

      <hr className="my-4 border-gray-700" />

      {/* Medication */}
      <FormField
        control={form.control}
        name="takingMedications"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Are you taking any medications?</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <hr className="my-4 border-gray-700" />

      {/* Emergency Contact */}
      <div className="grid grid-cols-2 gap-4">
        {["firstname", "lastname", "relationship", "phone"].map((fieldName) => (
          <FormField
            key={fieldName}
            control={form.control}
            name={`emergencyContact.${fieldName}` as any}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {{
                    firstname: "Emergency Contact First Name",
                    lastname: "Emergency Contact Last Name",
                    relationship: "Relationship",
                    phone: "Emergency Contact Phone"
                  }[fieldName]}
                </FormLabel>
                <FormControl>
                  <Input
                    type={fieldName === "phone" ? "tel" : "text"}
                    placeholder={{
                      firstname: "First Name",
                      lastname: "Last Name",
                      relationship: "Relationship",
                      phone: "Phone"
                    }[fieldName]}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>

      <Button type="submit" className="mt-6 bg-amber-600 hover:bg-amber-700 text-white text-lg px-6 py-3 rounded-md">
        Submit
      </Button>
    </form>
  </Form>
</Card>
    </div>
  )
}

export default PatientForm
