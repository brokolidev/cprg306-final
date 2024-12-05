'use client'

import { Button } from '@/components/button'
import { Fieldset, Label } from '@/components/fieldset'
import { Heading } from '@/components/heading'
import { Input, InputGroup } from '@/components/input'
import { Link } from '@/components/link'
import { Switch } from '@/components/switch'
import { Text } from '@/components/text'
import Image from 'next/image'
import { useAuth } from '@/hooks/auth'

export default function LoginPage() {
  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/',
  })

  const submitForm = async (form: FormData) => {
    const email = form.get('email').toString()
    const password = form.get('password').toString()

    await login({ email: email, password: password })
  }

  return (
    <>
      <div className="mx-auto h-screen max-w-screen-sm bg-black px-6 pt-12 lg:mt-24 lg:bg-zinc-100 lg:pt-2">
        <div className="mx-auto flex h-36 w-36 justify-center lg:rounded-full lg:bg-black">
          <Image src="/logo.svg" width={100} height={77.24} alt="Picture of the author" />
        </div>
        <div className="mt-2 w-full overflow-hidden rounded-lg bg-white p-8 shadow lg:mt-12 lg:p-16">
          <form action={submitForm}>
            <Fieldset>
              <Heading className="text-lg">Sign in</Heading>
              <InputGroup className="lg:mt-4">
                <Label className="pb-3 text-sm font-bold">Email</Label>
                <Input id="email" type="email" name="email" placeholder="Enter your email" />
              </InputGroup>
              <InputGroup>
                <Label className="pb-3 text-sm font-bold">Password</Label>
                <Input type="password" id="password" name="password" placeholder="Enter your password" />
              </InputGroup>
              <div className="mt-6 flex items-center justify-between lg:mt-8">
                <div className="flex items-center gap-2">
                  <div>
                    <Switch />
                  </div>
                  <div>
                    <Label className="text-sm">Remember me</Label>
                  </div>
                </div>
                <div className="flex items-center">
                  <Link href={'/auth/forgot-password'}>
                    <Text className="text-sm font-bold text-black">Forgot password?</Text>
                  </Link>
                </div>
              </div>
              <div className="mt-8">
                <Button type="submit" className="w-full cursor-pointer rounded-lg bg-black py-3 font-bold text-white">
                  Get started
                </Button>
              </div>
            </Fieldset>
          </form>
        </div>
      </div>
    </>
  )
}
