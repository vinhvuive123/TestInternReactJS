import axios from 'axios';

const API_URL = 'http://your-api-url-here'; // Thay đổi URL thành địa chỉ API thực tế của bạn

// Hàm lấy tất cả các bài viết
export const getPosts = async (page, title, tags) => {
    const response = await axios.get(`${API_URL}/posts`, {
        params: { page, title, tags }
    });
    return response.data;
};

// Hàm tạo bài viết mới
export const createPost = async (title, description, tags) => {
    const response = await axios.post(`${API_URL}/posts`, {
        title,
        description,
        tags
    });
    return response.data;
};

// Hàm chỉnh sửa bài viết
export const editPost = async (postId, title, description, tags) => {
    const response = await axios.patch(`${API_URL}/posts/${postId}`, {
        title,
        description,
        tags
    });
    return response.data;
};

// Hàm xóa bài viết
export const deletePost = async (postId) => {
    const response = await axios.delete(`${API_URL}/posts/${postId}`);
    return response.data;
};

// Hàm đăng nhập
export const login = async (username) => {
    const response = await axios.post(`${API_URL}/auth/login`, {
        username
    });
    return response.data;
};

// Hàm refresh token
export const refreshToken = async (refreshToken) => {
    const response = await axios.post(`${API_URL}/auth/refresh-token`, {
        refreshToken
    });
    return response.data;
};

// Hàm đăng xuất
export const logout = async () => {
    const response = await axios.delete(`${API_URL}/auth/logout`);
    return response.data;
};

// Hàm lấy danh sách galleries
export const getGalleries = async () => {
    const response = await axios.get(`${API_URL}/galleries`);
    return response.data;
};
