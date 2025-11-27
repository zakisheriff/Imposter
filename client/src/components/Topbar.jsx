import React, { useState, useEffect } from 'react';
import { settingsApi } from '../modules/api';
import { Moon, Sun, AlertTriangle, User } from 'lucide-react';
import '../styles/layout.css';

const Topbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const handlePanic = async () => {
        if (window.confirm('PANIC: Clear all simulation data?')) {
            try {
                await settingsApi.clear();
                window.location.reload();
            } catch (error) {
                console.error('Failed to clear data', error);
            }
        }
    };

    return (
        <header className="topbar">
            <div className="breadcrumbs">
                {/* Breadcrumbs could go here */}
            </div>
            <div className="actions" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <button className="btn-icon" onClick={toggleTheme} title="Toggle Theme">
                    {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </button>
                <button className="btn-primary" onClick={handlePanic} style={{ background: 'var(--error-color)', boxShadow: 'none' }}>
                    <AlertTriangle size={18} />
                    <span>Panic</span>
                </button>
                <div className="profile-icon" style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'var(--bg-tertiary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)'
                }}>
                    <User size={18} />
                </div>
            </div>
        </header>
    );
};

export default Topbar;
