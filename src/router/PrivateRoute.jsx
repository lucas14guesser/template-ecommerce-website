import React from 'react'
import { useAuth } from '../components/context/AuthContext'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) return <div>Carregando...</div>
    if (!user) return <Navigate to='/login' replace />

    return children;
}
