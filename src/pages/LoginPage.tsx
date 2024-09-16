import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React from 'react';


const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md p-4">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold">Login</h2>
        </CardHeader>
        <CardContent>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Username</label>
              <Input type="email" placeholder="Enter your username" className="w-full mt-2" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Password</label>
              <Input type="password" placeholder="Enter your password" className="w-full mt-2" />
            </div>
            <Button type="submit" className="w-full mt-4">Login</Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-gray-700 dark:text-gray-300">Don't have an account? <a href="/register" className="text-blue-500">Register</a></p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;