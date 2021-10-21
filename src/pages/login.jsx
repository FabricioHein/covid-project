import { useEffect, useState } from "react"
  
const Login = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    function LoadPage() {
        localStorage.setItem('login', true)
        window.location.reload();  
        
    }
      

    function setLogin() {

        let userAunt = {
            userName: 'user',
            password: '1234'
        }
        user == userAunt.userName & password == userAunt.password ?
             LoadPage() 
            :
            localStorage.removeItem('login');
        
        
                  
    }


    return (
        <div className="py-6">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div className="hidden lg:block lg:w-1/2 bg-cover" style={{

                    backgroundImage: `url("https://www.gov.br/pt-br/noticias/saude-e-vigilancia-sanitaria/2020/03/entenda-a-diferenca-entre-coronavirus-covid-19-e-novo-coronavirus/mitosis-3876669_1920.jpg/@@images/10852f76-0ff0-436b-8ab0-f9ed27b09f9e.png")`
                }} ></div>
                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">Covid Information</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                    <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">

                        <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign in with Google</h1>
                    </a>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <a href="#" className="text-xs text-center text-gray-500 uppercase">or login with email</a>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">User (user)</label>
                        <input
                            className="input input-bordered"

                            type="email"

                            value={user}

                            onChange={(e) => { setUser(e.target.value) }}

                        />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password (1234)</label>
                            <a href="#" className="text-xs text-gray-500">Forget Password?</a>
                        </div>
                        <input
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}

                            className="input input-bordered" type="password" />
                    </div>
                    <div className="mt-8">
                        <button
                            onClick={() => { setLogin() }}

                            className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <a href="#" className="text-xs text-gray-500 uppercase">or sign up</a>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login