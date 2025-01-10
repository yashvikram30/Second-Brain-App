import { useRef } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    console.log(usernameRef.current);
    const password = passwordRef.current?.value;
    const response = await axios.post<{ token: string }>(BACKEND_URL + "/api/v1/signin", {
      username,
      password,
    });
    const jwt = response.data.token;
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Sign In
        </h1>
        
        <div className="space-y-6">
          <div>
            <Input 
              reference={usernameRef}
              placeholder="Username"
              classes="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <Input 
              reference={passwordRef}
              placeholder="Password"
              classes="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <Button
            variant="primary"
            text="Sign in"
            size="lg"
            fullWidth={true}
            loading={false}
            onClick={signin}
            classes="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;