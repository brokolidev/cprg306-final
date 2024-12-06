'use client'

import { Badge } from '@/components/badge'
import { Button } from '@/components/button'
import { DescriptionDetails, DescriptionList, DescriptionTerm } from '@/components/description-list'
import { Divider } from '@/components/divider'
import { Heading, Subheading } from '@/components/heading'
import { Link } from '@/components/link'
import { getStudent } from '@/data'
import { CalendarIcon, ChevronLeftIcon } from '@heroicons/react/16/solid'
import { notFound } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Student({ params }: { params: Promise<{ id: string }> }) {
  const [student, setStudent]: any = useState({})

  useEffect(() => {
    const getId = async () => {
      const paramId = (await params).id
      setStudent(await getStudent(paramId))
    }
    getId()
  }, [params])

  if (!student) {
    notFound()
  }

  return (
    <>
      <div className="max-lg:hidden">
        <Link href="/students" className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400">
          <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
          Students
        </Link>
      </div>
      <div className="mt-4 lg:mt-8">
        <div className="flex items-center gap-4">
          <Heading>{student && student.fullName}</Heading>
          <Badge {...(student.beltColor ? { color: student.beltColor.toLowerCase() } : {})}>
            {student && student.beltColor}
          </Badge>
        </div>
        <div className="isolate mt-2.5 flex flex-wrap justify-between gap-x-6 gap-y-4">
          <div className="flex flex-wrap gap-x-10 gap-y-4 py-1.5">
            <span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
              <CalendarIcon className="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500" />
              <span>Trained from {student.createdAt}</span>
            </span>
            {/*<span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">*/}
            {/*  <CreditCardIcon className="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500" />*/}
            {/*  <span className="inline-flex gap-3">*/}
            {/*    {student.payment.card.type}{' '}*/}
            {/*    <span>/!*<span aria-hidden="true">••••</span> {student.payment.card.number}*!/</span>*/}
            {/*  </span>*/}
            {/*</span>*/}
            {/*<span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">*/}
            {/*  <CalendarIcon className="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500" />*/}
            {/*  <span>{student.date}</span>*/}
            {/*</span>*/}
          </div>
        </div>
      </div>
      <div className="mt-12">
        <Subheading>Summary</Subheading>
        <Divider className="mt-4" />
        <DescriptionList>
          <DescriptionTerm>Student Name</DescriptionTerm>
          <DescriptionDetails>{student.fullName}</DescriptionDetails>
          <DescriptionTerm>Email</DescriptionTerm>
          <DescriptionDetails>{student.email}</DescriptionDetails>
          <DescriptionTerm>Date of Birth</DescriptionTerm>
          <DescriptionDetails>{student.dob}</DescriptionDetails>
          <DescriptionTerm>Belt Color</DescriptionTerm>
          <DescriptionDetails>{student.beltColor}</DescriptionDetails>
          {/*<DescriptionDetails>*/}
          {/*  <Link href={student.event.url} className="flex items-center gap-2">*/}
          {/*    <Avatar src={student.event.thumbUrl} className="size-6" />*/}
          {/*    <span>{student.event.name}</span>*/}
          {/*  </Link>*/}
          {/*</DescriptionDetails>*/}
          <DescriptionTerm>Payment Status</DescriptionTerm>
          <DescriptionDetails>
            <Badge color="lime">Expired at {student.expiredAt}</Badge>
          </DescriptionDetails>
          <DescriptionTerm>Promotion Availability</DescriptionTerm>
          <DescriptionDetails>
            <Badge color="lime">Available</Badge>
          </DescriptionDetails>
        </DescriptionList>
      </div>
      <div className="mt-10 text-right">
        {/*<RefundOrder outline amount={student.amount.usd}>*/}
        {/*  Refund*/}
        {/*</RefundOrder>*/}
        <Button>Edit Information</Button>
      </div>
      {/*<div className="mt-12">*/}
      {/*  <Subheading>Payment method</Subheading>*/}
      {/*  <Divider className="mt-4" />*/}
      {/*<DescriptionList>*/}
      {/*  <DescriptionTerm>Transaction ID</DescriptionTerm>*/}
      {/*  <DescriptionDetails>{student.payment.transactionId}</DescriptionDetails>*/}
      {/*  <DescriptionTerm>Card number</DescriptionTerm>*/}
      {/*  <DescriptionDetails>•••• {student.payment.card.number}</DescriptionDetails>*/}
      {/*  <DescriptionTerm>Card type</DescriptionTerm>*/}
      {/*  <DescriptionDetails>{student.payment.card.type}</DescriptionDetails>*/}
      {/*  <DescriptionTerm>Card expiry</DescriptionTerm>*/}
      {/*  <DescriptionDetails>{student.payment.card.expiry}</DescriptionDetails>*/}
      {/*  <DescriptionTerm>Owner</DescriptionTerm>*/}
      {/*  <DescriptionDetails>{student.customer.name}</DescriptionDetails>*/}
      {/*  <DescriptionTerm>Email address</DescriptionTerm>*/}
      {/*  <DescriptionDetails>{student.customer.email}</DescriptionDetails>*/}
      {/*  <DescriptionTerm>Address</DescriptionTerm>*/}
      {/*  <DescriptionDetails>{student.customer.address}</DescriptionDetails>*/}
      {/*  <DescriptionTerm>Country</DescriptionTerm>*/}
      {/*  <DescriptionDetails>*/}
      {/*    <span className="inline-flex gap-3">*/}
      {/*      <img src={student.customer.countryFlagUrl} alt={student.customer.country} />*/}
      {/*      {student.customer.country}*/}
      {/*    </span>*/}
      {/*  </DescriptionDetails>*/}
      {/*  <DescriptionTerm>CVC</DescriptionTerm>*/}
      {/*  <DescriptionDetails>*/}
      {/*    <Badge color="lime">Passed successfully</Badge>*/}
      {/*  </DescriptionDetails>*/}
      {/*</DescriptionList>*/}
      {/*</div>*/}
    </>
  )
}
