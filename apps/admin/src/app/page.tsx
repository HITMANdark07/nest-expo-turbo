import Image from 'next/image';
import { formatDate, generateId } from 'shared';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Home() {
  const currentDate = formatDate(new Date());
  const sampleId = generateId();

  // Get environment variables directly
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Admin App';
  const nodeEnv = process.env.NODE_ENV || 'development';
  const debug = process.env.NODE_ENV === 'development';

  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-4xl'>
        <Image
          className='dark:invert'
          src='/next.svg'
          alt='Next.js logo'
          width={180}
          height={38}
          priority
        />

        {/* shadcn/ui Components Showcase */}
        <div className='w-full space-y-6'>
          <h1 className='text-3xl font-bold text-center mb-8'>
            shadcn/ui Components
          </h1>

          {/* Card Component */}
          <Card className='w-full'>
            <CardHeader>
              <CardTitle>Welcome to {appName}</CardTitle>
              <CardDescription>
                Built with Next.js and shadcn/ui components
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='api-url'>API URL</Label>
                  <Input id='api-url' value={apiUrl} readOnly />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='environment'>Environment</Label>
                  <Input id='environment' value={nodeEnv} readOnly />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <Label htmlFor='current-time'>Current Time</Label>
                  <Input id='current-time' value={currentDate} readOnly />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='sample-id'>Generated ID</Label>
                  <Input id='sample-id' value={sampleId} readOnly />
                </div>
              </div>

              <div className='flex gap-4 pt-4'>
                <Button variant='default'>Primary Action</Button>
                <Button variant='secondary'>Secondary Action</Button>
                <Button variant='outline'>Outline Action</Button>
                <Button variant='destructive'>Delete</Button>
              </div>
            </CardContent>
          </Card>

          {/* Environment Info Card */}
          <Card className='w-full'>
            <CardHeader>
              <CardTitle>Environment Information</CardTitle>
              <CardDescription>System configuration details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-2 text-sm font-mono'>
                <p>
                  <strong>API URL:</strong> {apiUrl}
                </p>
                <p>
                  <strong>Environment:</strong> {nodeEnv}
                </p>
                <p>
                  <strong>Debug Mode:</strong> {debug ? 'Enabled' : 'Disabled'}
                </p>
                <p>
                  <strong>Current Time:</strong> {currentDate}
                </p>
                <p>
                  <strong>Generated ID:</strong> {sampleId}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features Card */}
          <Card className='w-full'>
            <CardHeader>
              <CardTitle>Features</CardTitle>
              <CardDescription>
                What's included in this admin app
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className='font-mono list-inside list-decimal text-sm/6 text-center sm:text-left space-y-2'>
                <li className='tracking-[-.01em]'>
                  This admin app is now integrated with the shared package!
                </li>
                <li className='tracking-[-.01em]'>
                  Using shared types, constants, and utilities from the
                  monorepo.
                </li>
                <li className='tracking-[-.01em]'>
                  Beautiful UI components from shadcn/ui
                </li>
                <li className='tracking-[-.01em]'>
                  Responsive design with Tailwind CSS
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>

        <div className='flex gap-4 items-center flex-col sm:flex-row'>
          <Button asChild>
            <a
              href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                className='dark:invert mr-2'
                src='/vercel.svg'
                alt='Vercel logomark'
                width={20}
                height={20}
              />
              Deploy now
            </a>
          </Button>
          <Button variant='outline' asChild>
            <a
              href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              Read our docs
            </a>
          </Button>
        </div>
      </main>
      <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='/file.svg'
            alt='File icon'
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='/window.svg'
            alt='Window icon'
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='/globe.svg'
            alt='Globe icon'
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
