import { Button } from '@/components/button'
import { Divider } from '@/components/divider'
import { Heading, Subheading } from '@/components/heading'
import { Input } from '@/components/input'
import { Link } from '@/components/link'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Settings',
}

export default function StudentRegisterPage() {
  return (
    <>
      <div className="max-lg:hidden">
        <Link href="/Students" className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
          Students
        </Link>
      </div>
      <form method="post" className="mt-4 lg:mt-8">
        <Heading>Student Registration</Heading>
        <Divider className="my-10 mt-6" />

        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="space-y-1">
            <Subheading>First Name</Subheading>
          </div>
          <div>
            <Input aria-label="First Name" name="first_name" placeholder="John" />
          </div>
          <div className="space-y-1">
            <Subheading>Last Name</Subheading>
          </div>
          <div>
            <Input aria-label="Last Name" name="last_name" placeholder="Doe" />
          </div>
          <div className="space-y-1">
            <Subheading>Email</Subheading>
          </div>
          <div className="space-y-4">
            <Input type="email" aria-label="Email" name="email" placeholder="info@example.com" />
          </div>
          <div className="space-y-1">
            <Subheading>Date of Birth</Subheading>
          </div>
          <div>
            <Input aria-label="Date of Birth" name="dob" placeholder="02/07/86" />
          </div>
        </section>

        <Divider className="my-10" soft />

        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="space-y-1">
            <Subheading>Password</Subheading>
          </div>
          <div>
            <Input type="password" aria-label="Password" name="password" />
          </div>
          <div className="space-y-1">
            <Subheading>Confirm Password</Subheading>
          </div>
          <div>
            <Input type="password" aria-label="Confirm Password" name="password_confirmation" />
          </div>
        </section>

        <Divider className="my-10" soft />

        <div className="flex justify-end gap-4">
          <Button type="reset" plain>
            Reset
          </Button>
          <Button type="submit">Register</Button>
        </div>
      </form>
    </>
  )
}
