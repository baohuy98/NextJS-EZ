// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy, { ProxyResCallback } from 'http-proxy'
import Cookies from 'cookies'
type Data = {
    message: any
}
export const config = {
    api: {
        bodyParser: false
    }
} // config để next đưa body request tới client
const proxy = httpProxy.createProxyServer()
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method !== 'POST') {
        return res.status(404).json({ message: 'method not supported' })
    }
    return new Promise((resolve) => {
        console.log('login request')

        req.headers.cookie = ''

        const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
            let body = ''
            proxyRes.on('data', function (chunk) {
                body += chunk
            })
            proxyRes.on('end', function () {
                try {
                    const { accessToken, expireAt } = JSON.parse(body)
                    console.log({ accessToken, expireAt })

                    // convert token to cookies
                    const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' })
                    cookies.set('access_token', accessToken, {
                        httpOnly: true,
                        sameSite: 'lax',
                        expires: new Date(expireAt)
                    }
                    )
                        ; (res as NextApiResponse).status(200).json({ message: 'login successfully' })
                } catch (error) {
                    ; (res as NextApiResponse).status(500).json({ message: 'sth went wrong' })

                }

            })
        }

        proxy.once('proxyRes', handleLoginResponse)

        proxy.web(req, res, {
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: true, // tự handle res trả về
        })

    })
}
