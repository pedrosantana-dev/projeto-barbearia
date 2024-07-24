import Pagina from '@/components/shared/Pagina'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Pagina>{children}</Pagina>
    )
}
