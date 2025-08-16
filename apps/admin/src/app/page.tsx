import Image from 'next/image';
import { formatDate, generateId } from 'shared';
import {
  FiHome,
  FiUsers,
  FiSettings,
  FiBell,
  FiSearch,
  FiPlus,
  FiEdit,
  FiTrash2,
  FiEye,
  FiDownload,
} from 'react-icons/fi';
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
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  const currentDate = formatDate(new Date());
  const sampleId = generateId();

  // Get environment variables directly
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const appName = process.env.NEXT_PUBLIC_APP_NAME || 'Admin App';
  const nodeEnv = process.env.NODE_ENV || 'development';
  const debug = process.env.NODE_ENV === 'development';

  const sampleUsers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'Moderator',
      status: 'Inactive',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white shadow-sm border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center space-x-4'>
              <Image
                className='dark:invert'
                src='/next.svg'
                alt='Next.js logo'
                width={100}
                height={24}
                priority
              />
              <h1 className='text-xl font-semibold text-gray-900'>{appName}</h1>
            </div>

            <div className='flex items-center space-x-4'>
              <Button variant='outline' size='sm'>
                <FiBell className='h-4 w-4 mr-2' />
                Notifications
              </Button>
              <Avatar>
                <AvatarFallback className='bg-primary text-primary-foreground'>
                  AD
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* Stats Cards */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-8'>
          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Total Users</CardTitle>
              <FiUsers className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>2,847</div>
              <p className='text-xs text-muted-foreground'>
                +20.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                Active Sessions
              </CardTitle>
              <FiHome className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>1,234</div>
              <p className='text-xs text-muted-foreground'>
                +12.5% from last hour
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>API Calls</CardTitle>
              <FiSettings className='h-4 w-4 text-muted-foreground' />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>45.2K</div>
              <p className='text-xs text-muted-foreground'>
                +8.2% from last day
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>Error Rate</CardTitle>
              <Badge variant='destructive'>High</Badge>
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>2.4%</div>
              <p className='text-xs text-muted-foreground'>
                +0.8% from last week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Actions */}
        <div className='flex flex-col sm:flex-row gap-4 mb-8'>
          <div className='relative flex-1'>
            <FiSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
            <Input
              placeholder='Search users, settings, or anything...'
              className='pl-10'
            />
          </div>
          <Button>
            <FiPlus className='h-4 w-4 mr-2' />
            Add New
          </Button>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue='overview' className='space-y-6'>
          <TabsList>
            <TabsTrigger value='overview'>Overview</TabsTrigger>
            <TabsTrigger value='users'>Users</TabsTrigger>
            <TabsTrigger value='settings'>Settings</TabsTrigger>
          </TabsList>

          <TabsContent value='overview' className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>System Information</CardTitle>
                <CardDescription>
                  Current system status and configuration
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <Label>API URL</Label>
                    <p className='text-sm text-muted-foreground'>{apiUrl}</p>
                  </div>
                  <div>
                    <Label>Environment</Label>
                    <Badge
                      variant={
                        nodeEnv === 'production' ? 'default' : 'secondary'
                      }
                    >
                      {nodeEnv}
                    </Badge>
                  </div>
                  <div>
                    <Label>Debug Mode</Label>
                    <Badge variant={debug ? 'destructive' : 'outline'}>
                      {debug ? 'Enabled' : 'Disabled'}
                    </Badge>
                  </div>
                  <div>
                    <Label>Current Time</Label>
                    <p className='text-sm text-muted-foreground'>
                      {currentDate}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='users' className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>
                  Manage system users and their permissions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sampleUsers.map(user => (
                      <TableRow key={user.id}>
                        <TableCell className='font-medium'>
                          {user.name}
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              user.role === 'Admin'
                                ? 'destructive'
                                : 'secondary'
                            }
                          >
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              user.status === 'Active' ? 'default' : 'outline'
                            }
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className='flex space-x-2'>
                            <Button variant='outline' size='sm'>
                              <FiEye className='h-3 w-3' />
                            </Button>
                            <Button variant='outline' size='sm'>
                              <FiEdit className='h-3 w-3' />
                            </Button>
                            <Button variant='outline' size='sm'>
                              <FiTrash2 className='h-3 w-3' />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value='settings' className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>Application Settings</CardTitle>
                <CardDescription>
                  Configure application preferences and behavior
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  <Label htmlFor='app-name'>Application Name</Label>
                  <Input id='app-name' defaultValue={appName} />
                </div>
                <div className='space-y-2'>
                  <Label htmlFor='api-url'>API URL</Label>
                  <Input id='api-url' defaultValue={apiUrl} />
                </div>
                <div className='flex items-center space-x-2'>
                  <input
                    type='checkbox'
                    id='debug-mode'
                    defaultChecked={debug}
                    className='rounded border-gray-300'
                  />
                  <Label htmlFor='debug-mode'>Enable Debug Mode</Label>
                </div>
                <div className='pt-4'>
                  <Button>
                    <FiDownload className='h-4 w-4 mr-2' />
                    Save Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer Info */}
        <div className='mt-12 text-center text-sm text-gray-500'>
          <p>Generated ID: {sampleId}</p>
          <p>Built with Next.js, shadcn/ui, and React Icons</p>
        </div>
      </div>
    </div>
  );
}
