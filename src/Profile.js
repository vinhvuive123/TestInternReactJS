import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', description: '', tags: '' });
    const [isEditing, setIsEditing] = useState(null); 
    const userId = parseInt(localStorage.getItem('userId')); 

   
    const fetchUser = async () => {
        try {
            const response = await fetch('http://localhost:3000/users');
            const users = await response.json();
            const foundUser = users.find(user => user.id === userId);
            setUser(foundUser);
            
            const postsResponse = await fetch('http://localhost:3000/posts');
            const allPosts = await postsResponse.json();
            const userPosts = allPosts.filter(post => foundUser.posts.includes(post.id));
            setPosts(userPosts);
        } catch (error) {
            console.error('Lỗi khi lấy thông tin người dùng:', error);
        }
    };

    useEffect(() => {
        if (userId) {
            fetchUser();
        }
    }, [userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
    };

    const handleAddPost = () => {
        const newPostWithId = { ...newPost, id: Date.now() }; 
        setPosts((prevPosts) => [...prevPosts, newPostWithId]);
        setNewPost({ title: '', description: '', tags: '' });
        
    };
    

    const handleEditPost = (post) => {
        setNewPost(post);
        setIsEditing(post.id);
    };

    const handleUpdatePost = () => {
        setPosts((prevPosts) =>
            prevPosts.map((post) => (post.id === isEditing ? { ...post, ...newPost } : post))
        );
        setNewPost({ title: '', description: '', tags: '' });
        setIsEditing(null);
        
    };

    const handleDeletePost = (id) => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        
    };

    return (
        <div style={{ display: 'flex' }}>
            <div className="sidebar" style={styles.sidebar}>
                <a href="login">Logout</a>
            </div>
            <div className="content" style={styles.content}>
                {user && <h2>Tên người dùng: {user.username}</h2>}
                
                <div style={styles.postForm}>
                    <input
                        name="title"
                        value={newPost.title}
                        onChange={handleInputChange}
                        placeholder="Tiêu đề"
                        style={styles.input}
                    />
                    <input
                        name="description"
                        value={newPost.description}
                        onChange={handleInputChange}
                        placeholder="Mô tả"
                        style={styles.input}
                    />
                    <input
                        name="tags"
                        value={newPost.tags}
                        onChange={handleInputChange}
                        placeholder="Thẻ (cách nhau bằng dấu phẩy)"
                        style={styles.input}
                    />
                    {isEditing ? (
                        <button onClick={handleUpdatePost} style={styles.button}>Cập nhật bài viết</button>
                    ) : (
                        <button onClick={handleAddPost} style={styles.button}>Thêm bài viết</button>
                    )}
                </div>

                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tiêu đề</th>
                            <th>Mô tả</th>
                            <th>Thẻ</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.description}</td>
                                <td>{post.tags}</td>
                                <td>
                                    <button onClick={() => handleEditPost(post)} style={styles.actionButton}>Sửa</button>
                                    <button onClick={() => handleDeletePost(post.id)} style={styles.actionButton}>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const styles = {
    sidebar: {
        width: '200px',
        backgroundColor: '#e0e0e0',
        padding: '20px',
        height: '100vh',
    },
    content: {
        flexGrow: 1,
        padding: '20px',
    },
    postForm: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px',
    },
    input: {
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginBottom: '10px',
    },
    button: {
        backgroundColor: '#9c27b0',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '20px',
        cursor: 'pointer',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    actionButton: {
        marginRight: '10px',
        backgroundColor: '#e74c3c',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
};

export default Profile;
