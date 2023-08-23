// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'
import Cookies from 'cookies'
type Data = {
    name: any
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
    return new Promise((resolve) => {
        //convert cookies to token
        const cookies = new Cookies(req, res)
        const accessToken = cookies.get('access_token')
        if (accessToken) {
            req.headers.authorization = `Bearer ${accessToken}`
        }



        // dont send cookies to API server
        req.headers.cookie = ''
        //  /api/students
        // https://js-post-api.herokuapp.com/api/students
        proxy.web(req, res, {
            target: process.env.API_URL,
            changeOrigin: true,
            selfHandleResponse: false,
        })

        proxy.once('proxyRes', () => {
            resolve(true)
        })
    })
}
