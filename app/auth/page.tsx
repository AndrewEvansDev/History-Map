import { Card, CardDescription, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import SigninWithGithub from "../components/SigninWithGithub";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import SignInForm from "../components/SignInForm";


export default async function AuthRoute(){
    const session = await getServerSession(authOptions);

if(session){
    return redirect('/');
}

    return(
        <div className="w-screen h-screen flex items-center justify-center">
            <Card>
            <CardHeader>
                <CardTitle>Please sign in</CardTitle>
                <CardDescription>Need to be auth&apos;d to see page.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col">
                    <SignInForm />
                    <SigninWithGithub />

                </div>

            </CardContent>
        </Card>
        </div>
    );
}