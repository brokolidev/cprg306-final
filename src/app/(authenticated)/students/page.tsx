import { Avatar } from '@/components/avatar'
import { Heading } from '@/components/heading'
import { Link } from '@/components/link'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { getStudents } from '@/data'
import type { Metadata } from 'next'
import { Button } from '@/components/button'

export const metadata: Metadata = {
  title: 'Students',
}

let students = await getStudents()

export default function StudentsPage() {
  const conditionalStyle = (expiredAt) => {
    const currentDate = new Date().valueOf()
    const expirationDate = new Date(expiredAt).valueOf()
    const daysUntilExpiration: number = (expirationDate - currentDate) / (1000 * 60 * 60 * 24)

    return {
      color: daysUntilExpiration <= 5 && daysUntilExpiration >= 0 ? 'red' : '',
    }
  }

  return (
    <>
      <div className="flex items-end justify-between gap-4">
        <Heading>Students</Heading>
        <Link href="/students/register">
          <Button className="-my-0.5 cursor-pointer">Register</Button>
        </Link>
      </div>
      <Table className="mt-8 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Student ID</TableHeader>
            <TableHeader>Promotion Availability</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Level</TableHeader>
            <TableHeader className="text-right">Expired Date</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id} href={student.url} title={`Order #${student.id}`}>
              <TableCell>{student.id}</TableCell>
              <TableCell className="text-zinc-500">Availability here</TableCell>
              <TableCell>{student.fullName}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar src={student.profileImgUrl} className="size-6" />
                  <span>{student.beltColor} Belt</span>
                </div>
              </TableCell>
              <TableCell className="text-right" style={conditionalStyle(student.expiredAt)}>
                {student.expiredAt}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
