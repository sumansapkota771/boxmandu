import Header from "@/components/header"
import Footer from "@/components/footer"
import LoginForm from "@/components/login-form"

export default function Login() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </div>
  )
}
