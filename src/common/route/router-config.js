import LoginPage from '../../app/login-page/login-page'

const baseUrl = process.env.PUBLIC_URL;

const routeSources =[
    {component: LoginPage, path: `${baseUrl}/`, exact: true},
    {component: LoginPage, path: `${baseUrl}/login`, exact: true},
]

export default routeSources