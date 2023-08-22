// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import httpProxy from 'http-proxy'
type Data = {
    name: any
}
export const config = {
    api: {
        bodyParser: false
    }
}
const proxy = httpProxy.createProxyServer()

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // dont send cookies to API server
    req.headers.cookie = ''


    //  /api/students
    // https://js-post-api.herokuapp.com/api/students


    proxy.web(req, res, {
        target: process.env.API_URL,
        changeOrigin: true,
        selfHandleResponse: false,
    })

}
