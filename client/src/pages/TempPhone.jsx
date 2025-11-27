import React, { useState, useEffect, useRef } from 'react';
import { phoneApi } from '../modules/api';
import { joinRoom, onSms } from '../modules/socket';
import SmsList from '../components/SmsList';
import { Smartphone, Trash2, RefreshCw, Copy, Send, Check } from 'lucide-react';
import '../styles/phone.css';

const TempPhone = () => {
    const [number, setNumber] = useState(localStorage.getItem('currentPhone') || null);
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [testMessage, setTestMessage] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (number) {
            loadMessages(number);
            joinRoom('phone', number);

            const unsubscribe = onSms((message) => {
                setMessages(prev => [...prev, message]);
            });

            return () => unsubscribe();
        }
    }, [number]);

    const loadMessages = async (num) => {
        try {
            const res = await phoneApi.getMessages(num);
            setMessages(res.data.messages);
        } catch (err) {
            console.error(err);
        }
    };

    const createNumber = async () => {
        setLoading(true);
        try {
            const res = await phoneApi.create();
            setNumber(res.data.number);
            localStorage.setItem('currentPhone', res.data.number);
            setMessages([]);
            setCopied(false);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const deleteNumber = async () => {
        if (!number) return;
        if (window.confirm('Delete this number?')) {
            try {
                await phoneApi.delete(number);
                setNumber(null);
                localStorage.removeItem('currentPhone');
                setMessages([]);
                setCopied(false);
            } catch (err) {
                console.error(err);
            }
        }
    };

    const sendTestMessage = async (e) => {
        e.preventDefault();
        if (!testMessage.trim()) return;
        try {
            await phoneApi.send(number, { body: testMessage, from: 'Me' });
            setTestMessage('');
        } catch (err) {
            console.error(err);
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(number);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
    };

    return (
        <div className="phone-page fade-in">
            <div className="page-header">
                <h1 className="page-title">Temp Phone</h1>
                <div className="actions">
                    {number && (
                        <button className="btn-secondary" onClick={deleteNumber} style={{ marginRight: '8px' }}>
                            <Trash2 size={16} />
                            <span>Delete Number</span>
                        </button>
                    )}
                    <button className="btn-primary" onClick={createNumber} disabled={loading}>
                        <RefreshCw size={16} className={loading ? 'spin' : ''} />
                        <span>{loading ? 'Generating...' : number ? 'Regenerate' : 'Generate Number'}</span>
                    </button>
                </div>
            </div>

            {!number ? (
                <div className="empty-state card" style={{ textAlign: 'center', padding: '48px', maxWidth: '600px', margin: '40px auto' }}>
                    <div style={{ marginBottom: '24px', color: 'var(--accent-color)' }}>
                        <Smartphone size={64} strokeWidth={1.5} />
                    </div>
                    <h2 style={{ marginBottom: '12px' }}>No Active Number</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                        Generate a temporary phone number to receive SMS.
                    </p>
                    <button className="btn-primary" onClick={createNumber}>
                        <RefreshCw size={16} />
                        <span>Generate Number</span>
                    </button>
                </div>
            ) : (
                <div className="phone-layout">
                    <div className="phone-sidebar">
                        <div className="current-number">
                            <span className="label">Your Number</span>
                            <div className="number-display">
                                <code>{number}</code>
                                <button
                                    className="btn-icon"
                                    onClick={handleCopy}
                                    title="Copy"
                                    style={{
                                        color: copied ? 'var(--success-color)' : 'inherit',
                                    }}
                                >
                                    {copied ? <Check size={16} /> : <Copy size={16} />}
                                </button>
                            </div>
                        </div>
                        <div className="message-list">
                            {/* Placeholder for conversation list if we had one */}
                            <div style={{ padding: '16px', color: 'var(--text-secondary)', fontSize: '0.875rem', textAlign: 'center' }}>
                                Waiting for messages...
                            </div>
                        </div>
                    </div>

                    <div className="phone-content">
                        <div className="chat-header">
                            <div className="chat-avatar">
                                <Smartphone size={20} />
                            </div>
                            <div className="chat-info">
                                <h3>Incoming Messages</h3>
                                <span>Real-time SMS reception</span>
                            </div>
                        </div>

                        <div className="chat-body">
                            <SmsList messages={messages} />
                        </div>

                        <div className="chat-footer" style={{ padding: '16px', borderTop: '1px solid var(--divider-color)', background: 'white' }}>
                            <form onSubmit={sendTestMessage} style={{ display: 'flex', gap: '12px' }}>
                                <input
                                    type="text"
                                    value={testMessage}
                                    onChange={(e) => setTestMessage(e.target.value)}
                                    placeholder="Simulate receiving a message..."
                                    className="sms-input"
                                    style={{
                                        flex: 1,
                                        padding: '10px 16px',
                                        borderRadius: '24px',
                                        border: '1px solid var(--border-color)',
                                        outline: 'none',
                                        fontSize: '0.9375rem'
                                    }}
                                />
                                <button type="submit" className="btn-primary" style={{ borderRadius: '24px', padding: '10px 20px' }}>
                                    <Send size={16} />
                                    <span style={{ marginLeft: '8px' }}>Send</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TempPhone;
