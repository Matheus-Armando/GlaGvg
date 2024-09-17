import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React from 'react';

const LoginPage: React.FC = () => {
    return (
        <Layout>    
                <Card className="w-full max-w-md p-4">
                    <CardHeader className="text-center">
                        <h2 className="text-2xl font-bold">Login</h2>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-500">Username</label>
                                <Input type="email" placeholder="Enter your username" className="w-full mt-2" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 dark:text-gray-500">Password</label>
                                <Input type="password" placeholder="Enter your password" className="w-full mt-2" />
                            </div>
                            <Button type="submit" variant="default" className="w-full mt-4">Login</Button>
                        </form>
                    </CardContent>
                    <CardFooter className="text-center">
                        <p className="text-gray-700 dark:text-gray-300">Don't have an account? <a href="/register" className="text-blue-500">Register</a></p>
                    </CardFooter>
                </Card>       
        </Layout>
    );
};

export default LoginPage;