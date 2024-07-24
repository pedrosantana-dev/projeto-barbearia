import { ProvedorUsuario } from '@/data/contexts/ContextoUsuario'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ProvedorUsuario>{children}</ProvedorUsuario>
    )
}
