import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, CreditCard, Activity, ArrowRight, Zap, Shield, Clock } from 'lucide-react';
import '../styles/animations.css';

const Dashboard = () => {
    return (
        <div className="dashboard fade-in">
            {/* Hero Section */}
            <div className="hero-section" style={{
                textAlign: 'center',
                padding: '60px 0 80px',
                maxWidth: '800px',
                margin: '0 auto'
            }}>
                <h1 style={{
                    fontSize: '3.5rem',
                    fontWeight: '500',
                    marginBottom: '24px',
                    lineHeight: '1.2',
                    color: 'var(--text-primary)'
                }}>
                    Privacy tools for the <span style={{ color: 'var(--accent-color)' }}>modern web</span>
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '40px'
                }}>
                    Generate temporary identities instantly. Protect your privacy with disposable email, phone numbers, and virtual cards.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                    <Link to="/email" className="btn-primary" style={{ padding: '12px 32px', fontSize: '1rem' }}>
                        Get Started
                    </Link>
                    <Link to="/settings" className="btn-secondary" style={{ padding: '12px 32px', fontSize: '1rem' }}>
                        Configure
                    </Link>
                </div>
            </div>

            {/* Feature Cards (Pricing Style) */}
            <div className="grid-container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
                marginBottom: '64px'
            }}>
                {/* Email Card */}
                <Link
                    to="/email"
                    className="card feature-card delay-1 slide-in-up"
                    style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        padding: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        borderTop: '4px solid var(--accent-color)' // Highlight
                    }}
                >
                    <div style={{ marginBottom: '24px', color: 'var(--accent-color)' }}>
                        <Mail size={48} strokeWidth={1.5} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Temp Email</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', flex: 1 }}>
                        Instant disposable email addresses. Real-time inbox with HTML support and OTP detection.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', color: 'var(--text-secondary)' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <Zap size={16} color="var(--success-color)" /> Real-time delivery
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <Shield size={16} color="var(--success-color)" /> Spam protection
                        </li>
                    </ul>
                    <div style={{
                        color: 'var(--accent-color)',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        Open Inbox <ArrowRight size={18} />
                    </div>
                </Link>

                {/* Phone Card */}
                <Link
                    to="/phone"
                    className="card feature-card delay-2 slide-in-up"
                    style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        padding: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                    }}
                >
                    <div style={{ marginBottom: '24px', color: 'var(--warning-color)' }}>
                        <Phone size={48} strokeWidth={1.5} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Temp Phone</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', flex: 1 }}>
                        Virtual phone numbers for SMS verification. Receive codes instantly from any service.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', color: 'var(--text-secondary)' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <Zap size={16} color="var(--success-color)" /> Instant reception
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <Shield size={16} color="var(--success-color)" /> Private numbers
                        </li>
                    </ul>
                    <div style={{
                        color: 'var(--accent-color)',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        Open Phone <ArrowRight size={18} />
                    </div>
                </Link>

                {/* Card Card */}
                <Link
                    to="/card"
                    className="card feature-card delay-3 slide-in-up"
                    style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        padding: '40px',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                    }}
                >
                    <div style={{ marginBottom: '24px', color: 'var(--error-color)' }}>
                        <CreditCard size={48} strokeWidth={1.5} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Virtual Card</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', flex: 1 }}>
                        Generate test credit cards for safe transactions. Simulate payments and authorizations.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px', color: 'var(--text-secondary)' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <Zap size={16} color="var(--success-color)" /> Instant issuance
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <Shield size={16} color="var(--success-color)" /> Secure details
                        </li>
                    </ul>
                    <div style={{
                        color: 'var(--accent-color)',
                        fontWeight: '500',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        Open Wallet <ArrowRight size={18} />
                    </div>
                </Link>
            </div>

            {/* Recent Activity Section */}
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h3 style={{ marginBottom: '24px', fontSize: '1.25rem', color: 'var(--text-secondary)' }}>Recent Activity</h3>
                <div className="card" style={{ padding: '48px', textAlign: 'center', background: 'var(--bg-secondary)', border: 'none' }}>
                    <Activity
                        size={48}
                        color="var(--text-tertiary)"
                        style={{ marginBottom: '16px', display: 'block', margin: '0 auto 16px auto' }}
                    />
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
                        No recent activity to show.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;