import { Avatar } from '@/components/avatar'
import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/table'
import { getStudents } from '@/data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Students',
}

let students = await getStudents()

export default function Orders() {
  const conditionalStyle = (expiredAt) => {
    const currentDate = new Date()
    const expirationDate = new Date(expiredAt)
    const daysUntilExpiration: number = (expirationDate - currentDate) / (1000 * 60 * 60 * 24)

    // 조건에 따라 스타일을 적용합니다
    return {
      color: daysUntilExpiration <= 5 && daysUntilExpiration >= 0 ? 'red' : '',
    }
  }

  return (
    <>
      <div className="flex items-end justify-between gap-4">
        <Heading>Students</Heading>
        <Button className="-my-0.5">Register</Button>
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
