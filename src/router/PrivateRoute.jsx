import React from 'react'
import { useAuth } from '../components/context/AuthContext'
import { Navigate } from 'react-router-dom';
import Loading from '../services/Loading';

export default function PrivateRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) return <Loading />
    if (!user) return <Navigate to='/login' replace />

    return children;
}
