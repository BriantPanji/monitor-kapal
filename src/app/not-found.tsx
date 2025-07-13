import Container from '@/components/Container'
import Link from 'next/link'

export default function NotFound() {
    return (
        <Container header="Error 404 - Page Not Found" headerIcon="fa-bug">
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center w-full text-sm">
                <h2 className="font-bold text-4xl">404 - Not Found</h2>
                <p>Halaman tidak ditemukan</p>
                <Link href="/" className="text-blue-500 hover:underline -mt-2">Kembali ke Dashboard</Link>
            </div>
        </Container>
    )
}