import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user')); 

    useEffect(() => {
        if (!user) {
            navigate('/'); 
        }
    }, [user, navigate]);

    const handleLogout = () => {
        localStorage.removeItem('user'); 
        navigate('/'); 
    };

    const goToProfile = () => {
        console.log('Navigating to Profile');
        navigate('/profile'); 
    };
    

    return (
        <div>
            <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center">
                <header className="w-100 d-flex justify-content-between align-items-center p-4">
                    <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-pink-500 me-2" style={{ width: '16px', height: '16px', backgroundColor: '#ec4899' }}></div>
                        <div className="rounded-circle" style={{ width: '16px', height: '16px', backgroundColor: '#a855f7' }}></div>
                    </div>

                    <div>
                        <button className="btn btn-secondary me-2" onClick={goToProfile}>Hồ Sơ</button>
                        <button className="btn btn-danger" onClick={handleLogout}>Đăng Xuất</button>
                    </div>


                </header>
                <main className="d-flex flex-column align-items-center text-center mt-5">
                    <h1 className="display-3 fw-bold text-dark mb-4">Save your data storage here.</h1>
                    <p className="text-muted mb-4" style={{ maxWidth: '400px' }}>
                        Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.
                    </p>
                    <button className="btn btn-primary mb-4">Learn more</button>
                    <img src="https://placehold.co/600x400" alt="Illustration of people managing data storage" className="img-fluid" style={{ maxWidth: '700px' }} />
                </main>
            </div>

            <div className="container mx-auto px-4 py-16">
                <h2 className="text-4xl font-bold text-center mb-4">Features</h2>
                <p className="text-center text-lg text-gray-600 mb-12">
                    Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.
                </p>
                <div className="row">
                    {['Search Data', '24 Hours Access', 'Print Out', 'Security Code'].map((feature, index) => (
                        <div className="col-md-6 mb-4" key={index}>
                            <div className="bg-light p-4 rounded shadow">
                                <img src="https://placehold.co/100x100" alt={feature} className="mb-4 mx-auto" />
                                <h3 className="h5 font-weight-bold mb-2">{feature}</h3>
                                <p className="text-muted mb-4">
                                    {feature === 'Search Data' && 'Don’t worry if your data is very large, the Data Warehouse provides a search engine, which is useful for making it easier to find data effectively saving time.'}
                                    {feature === '24 Hours Access' && 'Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent.'}
                                    {feature === 'Print Out' && 'Print out service gives you convenience if someday you need print data, just edit it all and just print it.'}
                                    {feature === 'Security Code' && 'Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file.'}
                                </p>
                                <a href="#" className="text-primary font-weight-bold d-flex align-items-center">
                                    Learn more <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="d-flex align-items-center justify-content-center min-vh-100 testimonial-container" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="w-75 testimonial-box">
                    <h2 className="text-center text-3xl font-bold text-purple-500 mb-4">Testimonials</h2>
                    <div className="d-flex align-items-center position-relative">
                        <button className="btn btn-link text-purple-500 position-absolute" style={{ left: '10px', fontSize: '24px' }}>
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <div className="flex-grow-1">
                            <div className="d-flex align-items-center mb-4">
                                <img src="https://placehold.co/100x100" alt="Profile of John Fang" className="rounded-circle me-3" style={{ width: '64px', height: '64px' }} />
                                <div>
                                    <h3 className="h5 font-weight-bold">John Fang</h3>
                                    <p className="text-muted">wordfaang.com</p>
                                </div>
                            </div>
                            <p className="text-muted">
                                Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.
                            </p>
                        </div>
                        <button className="btn btn-link text-purple-500 position-absolute" style={{ right: '10px', fontSize: '24px' }}>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <span className="badge bg-pink-500 mx-1" style={{ height: '8px', width: '8px', borderRadius: '50%' }}></span>
                        <span className="badge bg-white mx-1" style={{ height: '8px', width: '8px', borderRadius: '50%' }}></span>
                        <span className="badge bg-white mx-1" style={{ height: '8px', width: '8px', borderRadius: '50%' }}></span>
                        <span className="badge bg-white mx-1" style={{ height: '8px', width: '8px', borderRadius: '50%' }}></span>
                    </div>
                </div>
            </div>

            <footer className="bg-white py-5">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-4">
                            <div className="d-flex align-items-center mb-4">
                                <div className="bg-primary rounded-circle mr-2" style={{ width: '16px', height: '16px' }}></div>
                                <div className="bg-danger rounded-circle mr-2" style={{ width: '16px', height: '32px' }}></div>
                                <span className="h4 font-weight-bold">DataWarehouse</span>
                            </div>
                            <address className="not-italic mb-4">
                                <p>Warehouse Society, 234</p>
                                <p>Bahagia Ave Street PRBW 29281</p>
                            </address>
                            <p className="mb-4">info@warehouse.project</p>
                            <p className="mb-4">1-232-3434 (Main)</p>
                        </div>
                        <div className="col-md-4">
                            <h3 className="font-weight-bold mb-4">About</h3>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-dark">Profile</a></li>
                                <li className="mb-2"><a href="#" className="text-dark">Features</a></li>
                                <li className="mb-2"><a href="#" className="text-dark">Careers</a></li>
                                <li className="mb-2"><a href="#" className="text-dark">DW News</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h3 className="font-weight-bold mb-4">Help</h3>
                            <ul className="list-unstyled">
                                <li className="mb-2"><a href="#" className="text-dark">Support</a></li>
                                <li className="mb-2"><a href="#" className="text-dark">Sign up</a></li>
                                <li className="mb-2"><a href="#" className="text-dark">Guide</a></li>
                                <li className="mb-2"><a href="#" className="text-dark">Reports</a></li>
                                <li className="mb-2"><a href="#" className="text-dark">Q&A</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center text-dark mt-4">
                    © 2024 All Rights Reserved
                </div>
            </footer>
        </div>
    );
};

export default Home;
