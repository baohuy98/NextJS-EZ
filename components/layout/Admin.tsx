import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import * as React from 'react';
import { Auth } from '../common';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/router';




export function AdminLayout({ children }: LayoutProps) {
    const { profile, logout } = useAuth()
    const router = useRouter()
    async function handleLogoutClick() {
        try {
            await logout()
            router.push('/login')
        } catch (error) {
            console.log('fail to logout', error)
        }
    }
    return (
        <Auth>
            <h1>Admin Layout</h1>
            <div>sidebar</div>
            <p>Profile: {JSON.stringify(profile)} </p>

            <div>
                <button onClick={handleLogoutClick}>Logout</button>
            </div>
            <Link href='/'>
                <p>
                    Home
                </p>
            </Link>
            <Link href='/about'>
                <p>
                    About
                </p>
            </Link>
            <div>{children}</div>
        </Auth>
    );
}
