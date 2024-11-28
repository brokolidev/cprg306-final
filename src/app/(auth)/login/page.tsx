import { Button } from '@/components/button'
import { Fieldset, Label } from '@/components/fieldset'
import { Heading } from '@/components/heading'
import { Input, InputGroup } from '@/components/input'
import { Link } from '@/components/link'
import { Switch } from '@/components/switch'
import { Text } from '@/components/text'
import Image from 'next/image'

export default function LoginPage() {
  return (
    <>
      <div className="mx-auto h-screen max-w-screen-sm bg-black px-6 pt-12 lg:mt-24 lg:bg-zinc-100 lg:pt-2">
        <div className="mx-auto flex h-36 w-36 justify-center lg:rounded-full lg:bg-black">
          <Image src="/logo.svg" width={100} height={77.24} alt="Picture of the author" />
        </div>
        <div className="mt-2 w-full overflow-hidden rounded-lg bg-white p-8 shadow lg:mt-12 lg:p-16">
          <Fieldset>
            <Heading className="text-lg">Sign in</Heading>
            <InputGroup className="lg:mt-4">
              <Label className="pb-3 text-sm font-bold">Email</Label>
              <Input type="email" placeholder="Enter your email" />
            </InputGroup>
            <InputGroup>
              <Label className="pb-3 text-sm font-bold">Password</Label>
              <Input type="password" />
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
              <Button className="w-full rounded-lg bg-black py-3 font-bold text-white">Get started</Button>
            </div>
          </Fieldset>
        </div>
      </div>
    </>
  )
}
