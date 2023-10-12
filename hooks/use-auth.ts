import { authApi } from '@/api/auth-api'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/_internal'

export function useAuth(options?: Partial<PublicConfiguration>) {
    // profile
    //
    const { data: profile, error, mutate } = useSWR('/profile', {
        dedupingInterval: 60 * 60 * 1000,
        revalidateOnFocus: false,
        ...options
    })

    console.log({ profile, error })

    const firstLoading = profile === undefined && error === undefined

    // không dùng try catch ở đây mà dùng ở chỗ nào sử dụng những thằng này
    async function login() {
        await authApi.login({
            username: 'test1',
            password: '123123'
        })

        await mutate()  // dùng await để đợi refresh lại request
    }

    async function logout() {
        await authApi.logout()
        mutate({}, false)

    }



    return {
        profile,
        error,
        login,
        logout,
        firstLoading
    }
}