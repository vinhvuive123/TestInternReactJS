import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/users');
            const users = await response.json();

            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
                console.log('Đăng nhập thành công:', user);
                localStorage.setItem('user', JSON.stringify(user)); 
                localStorage.setItem('userId', user.id); // Lưu userId vào localStorage

                // Đặt thời gian đăng nhập là 1 phút (60000 ms)
                setTimeout(() => {
                    localStorage.removeItem('user');
                    localStorage.removeItem('userId'); // Xóa userId sau 1 phút
                    console.log('Đã xóa thông tin người dùng sau 1 phút');
                }, 60000);

                navigate('/home'); 
            } else {
                setError('Tên đăng nhập hoặc mật khẩu không chính xác!');
            }
        } catch (err) {
            console.error('Lỗi khi đăng nhập:', err);
            setError('Có lỗi xảy ra. Vui lòng thử lại sau!');
        }
    };

    const handleBack = () => {
        navigate(-1); 
    };

    const styles = {
        body: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            margin: 0,
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#ffffff',
        },
        container: {
            textAlign: 'center',
        },
        h1: {
            fontSize: '48px',
            marginBottom: '20px',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        label: {
            fontSize: '18px',
            marginBottom: '10px',
            textAlign: 'left',
            width: '100%',
            maxWidth: '320px',
        },
        input: {
            width: '300px',
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            marginBottom: '20px',
        },
        button: {
            width: '320px',
            padding: '10px',
            fontSize: '18px',
            color: 'white',
            backgroundColor: '#9b59b6',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
        },
        backLink: {
            cursor: 'pointer',
            color: '#9b59b6',
            textDecoration: 'underline',
            marginTop: '10px',
        },
        error: {
            color: 'red',
        },
    };

    return (
        <div style={styles.body}>
            <div style={styles.container}>
                <h2 style={styles.h1}>Đăng Nhập</h2>
                {error && <p style={styles.error}>{error}</p>}
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label htmlFor="username" style={styles.label}>Tên người dùng</label>
                    <input
                        type="text"
                        style={styles.input}
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <label htmlFor="password" style={styles.label}>Mật khẩu</label>
                    <input
                        type="password"
                        style={styles.input}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" style={styles.button}>Đăng Nhập</button>
                </form>
                <span style={styles.backLink} onClick={handleBack}>Quay lại</span>
            </div>
        </div>
    );
}

export default Login;
