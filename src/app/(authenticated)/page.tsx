'use client'

import { Badge } from '@/components/badge'
import { Divider } from '@/components/divider'
import { Heading, Subheading } from '@/components/heading'
import { Select } from '@/components/select'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/table'
import {useAuth} from "@/hooks/auth";

export function Stat({ title, value, change }: { title: string; value: string; change: string }) {
  return (
    <div>
      <Divider />
      <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">{title}</div>
      <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">{value}</div>
      <div className="mt-3 text-sm/6 sm:text-xs/6">
        <Badge color={change.startsWith('+') ? 'lime' : 'pink'}>{change}</Badge>{' '}
        <span className="text-zinc-500">from last week</span>
      </div>
    </div>
  )
}

export default function Home() {
  const { user } = useAuth({ middleware: 'auth' })

  const greeting = () => {
    const now = new Date(); // Get the current date and time
    const hour = now.getHours(); // Extract the current hour (0-23)

    if (hour >= 5 && hour < 12) {
      return "morning"; // 5:00 AM to 11:59 AM
    } else if (hour >= 12 && hour < 18) {
      return "afternoon"; // 12:00 PM to 5:59 PM
    } else {
      return "evening"; // 6:00 PM to 4:59 AM
    }
  }

  return (
    <>
      <Heading>Good {greeting()}, {user?.first_name && user.first_name}</Heading>
      <div className="mt-8 flex items-end justify-between">
        <Subheading>Overview</Subheading>
        <div>
          <Select name="period">
            <option value="last_week">Last week</option>
            <option value="last_two">Last two weeks</option>
            <option value="last_month">Last month</option>
            <option value="last_quarter">Last quarter</option>
          </Select>
        </div>
      </div>
      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <Stat title="Total revenue" value="$2.6M" change="+4.5%" />
        <Stat title="Total Customers" value="488" change="-0.5%" />
        <Stat title="Employees" value="8" change="+30%" />
      </div>
      <Subheading className="mt-14">Upcomming Schedule</Subheading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Timeslot</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Main Instructor</TableHeader>
            <TableHeader>Level</TableHeader>
            <TableHeader>Class Size</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {/*{orders.map((order) => (*/}
          {/*  <TableRow key={order.id} href={order.url} title={`Order #${order.id}`}>*/}
          {/*    <TableCell>{order.id}</TableCell>*/}
          {/*    <TableCell className="text-zinc-500">{order.date}</TableCell>*/}
          {/*    <TableCell>{order.customer.name}</TableCell>*/}
          {/*    <TableCell>*/}
          {/*      <div className="flex items-center gap-2">*/}
          {/*        <Avatar src={order.event.thumbUrl} className="size-6" />*/}
          {/*        <span>{order.event.name}</span>*/}
          {/*      </div>*/}
          {/*    </TableCell>*/}
          {/*    <TableCell>US{order.amount.usd}</TableCell>*/}
          {/*  </TableRow>*/}
          {/*))}*/}
        </TableBody>
      </Table>
    </>
  )
}
