import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

const Layout = ({ children }: { children?: JSX.Element | undefined }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
