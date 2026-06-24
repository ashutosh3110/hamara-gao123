import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Phone, Lock, Eye, EyeOff, Globe } from 'lucide-react';
import bannerImg from '@/assets/village_banner.png';
import translations from '@/constants/translations.json';
import { loginStart, loginSuccess, loginFailure } from '@/redux/slices/authSlice';
import axios from 'axios';

export default function Login() {
  const [lang, setLang] = useState('hi');
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [time, setTime] = useState('09:41');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, error } = useSelector((state) => state.auth);

  // Success message passed from registration redirect
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
      // Clear state so it doesn't reappear on reload
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 60000); // Update time every minute
    return () => clearInterval(timer);
  }, []);

  const t = translations[lang];

  const handleLogin = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    dispatch(loginStart());

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, { phone, password });
      if (response.data.status === 'success') {
        const { user, accessToken } = response.data.data;
        
        // Save token to localStorage & Redux store
        dispatch(loginSuccess({ user, token: accessToken }));

        // Redirect user based on their role
        switch (user.role) {
          case 'Customer':
            navigate('/customer/dashboard');
            break;
          case 'Vendor':
            navigate('/vendor/dashboard');
            break;
          case 'Delivery Boy':
            navigate('/delivery/dashboard');
            break;
          case 'Admin':
            navigate('/admin/dashboard');
            break;
          default:
            navigate('/');
        }
      }
    } catch (err) {
      console.error('Login error:', err);
      const errMsg = err.response?.data?.errors?.[0]?.message || 
                     err.response?.data?.message || 
                     (lang === 'hi' ? 'लॉगिन विफल रहा। कृपया अपना क्रेडेंशियल जांचें।' : 'Login failed. Please check your credentials.');
      dispatch(loginFailure(errMsg));
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center overflow-hidden bg-neutral-900 p-0 sm:p-4">
      {/* Mobile Device Frame Mockup */}
      <div className="relative flex h-full w-full max-w-md flex-col overflow-hidden bg-white shadow-2xl sm:h-[820px] sm:max-h-[95vh] sm:rounded-[40px] sm:border-8 sm:border-neutral-800">
        
        {/* Top Status Bar Mockup - TIME ONLY (Network, Wifi, and Charging indicators are omitted) */}
        <div className="absolute top-0 left-0 right-0 z-20 flex justify-between px-6 pt-3 text-xs font-semibold text-neutral-800 bg-transparent">
          <span>{time}</span>
        </div>

        {/* Floating Language Switcher */}
        <button
          type="button"
          onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
          className="absolute top-10 right-4 z-20 flex items-center space-x-1 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-primary-700 shadow-md backdrop-blur-xs transition hover:bg-white"
        >
          <Globe className="h-3.5 w-3.5" />
          <span>{lang === 'hi' ? 'English' : 'हिन्दी'}</span>
        </button>

        {/* Top Illustration Banner */}
        <div className="relative h-[290px] w-full overflow-hidden bg-primary-50 shrink-0">
          <img
            src={bannerImg}
            alt="Village Farm Field Illustration"
            className="h-full w-full object-cover object-bottom opacity-90"
          />
          {/* Transparent shade matching mockup */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>

          {/* Logo & Branding Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
            {/* Custom SVG Shopping Sprout Logo */}
            <div className="mb-2 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-22 h-22">
                {/* Sprout/Leaves */}
                <path d="M50,45 C50,25 50,20 50,20" stroke="#34a85a" strokeWidth="4" strokeLinecap="round" />
                <path d="M50,20 C46,10 50,2 50,2 C50,2 54,10 50,20 Z" fill="#34a85a" />
                <path d="M50,30 C38,25 35,14 35,14 C35,14 45,18 50,30 Z" fill="#34a85a" />
                <path d="M50,30 C62,25 65,14 65,14 C65,14 55,18 50,30 Z" fill="#34a85a" />

                {/* Shopping Cart Body */}
                <path d="M25,40 L33,40 L45,75 L80,75 L88,48 L35,48" stroke="#1b5730" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Grid Lines */}
                <path d="M40,55 L85,55 M42,62 L82,62 M44,69 L80,69" stroke="#1b5730" strokeWidth="2" />
                <path d="M50,48 L50,75 M60,48 L60,75 M70,48 L70,75 M80,48 L80,75" stroke="#1b5730" strokeWidth="2" />
                {/* Wheels */}
                <circle cx="48" cy="85" r="6" fill="#1b5730" />
                <circle cx="48" cy="85" r="2" fill="#fff" />
                <circle cx="76" cy="85" r="6" fill="#1b5730" />
                <circle cx="76" cy="85" r="2" fill="#fff" />
              </svg>
            </div>

            {/* App Name */}
            <h1 className="text-4xl font-extrabold tracking-wide text-primary-800">
              {t.appName}
            </h1>
            {/* Tagline */}
            <p className="mt-1 text-sm font-bold text-neutral-800 text-center">
              {t.tagline}
            </p>
          </div>
        </div>

        {/* Login Form Container - Slide-up Card layout raised slightly with -mt-20 */}
        <div className="relative -mt-20 flex-1 rounded-t-[36px] bg-white px-6 pt-6 pb-4 shadow-lg flex flex-col justify-between overflow-hidden">
          
          <div>
            {/* Header Title with underline indicator */}
            <div className="mb-4">
              <h2 className="text-lg font-bold text-neutral-900">{t.loginTitle}</h2>
              <div className="mt-1 h-1 w-8 rounded-full bg-primary-600"></div>
            </div>

            <form onSubmit={handleLogin} className="space-y-3">
              {successMessage && (
                <div className="rounded-lg bg-green-50 p-2.5 text-xs font-semibold text-green-600">
                  {successMessage}
                </div>
              )}
              {error && (
                <div className="rounded-lg bg-red-50 p-2.5 text-xs font-semibold text-red-600">
                  {error}
                </div>
              )}

              {/* Mobile Number Field */}
              <div className="space-y-1.5">
                <div className="flex h-11 w-full items-center rounded-xl border border-neutral-200 px-3.5 transition focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500 bg-white">
                  <Phone className="h-5 w-5 text-primary-700" />
                  
                  {/* Country Code picker */}
                  <div className="ml-3 flex items-center space-x-1 pr-2.5 border-r border-neutral-200 text-sm font-semibold text-neutral-700">
                    <span>+91</span>
                    <svg className="h-4 w-4 fill-current text-neutral-500" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>

                  <input
                    type="tel"
                    placeholder={t.phonePlaceholder}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 pl-3 text-sm font-medium text-neutral-800 placeholder-neutral-400 outline-none"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-neutral-600 pl-1">
                  {t.passwordLabel}
                </label>
                <div className="flex h-11 w-full items-center rounded-xl border border-neutral-200 px-3.5 transition focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500 bg-white">
                  <Lock className="h-5 w-5 text-primary-700" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder={t.passwordPlaceholder}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="flex-1 pl-3 text-sm font-medium text-neutral-800 placeholder-neutral-400 outline-none"
                    required
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-neutral-400 hover:text-neutral-600 focus:outline-none"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end">
                <a
                  href="#forgot"
                  className="text-xs font-bold text-primary-700 hover:underline"
                >
                  {t.forgotPassword}
                </a>
              </div>

              {/* Login Action Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex h-11 w-full items-center justify-center rounded-xl bg-primary-800 text-sm font-bold text-white shadow-md transition hover:bg-primary-900 active:scale-[0.99] disabled:opacity-50"
              >
                {loading ? (lang === 'hi' ? 'लॉगिन किया जा रहा है...' : 'Logging in...') : t.loginButton}
              </button>
            </form>
          </div>

          {/* Social login separator (spaced per request) */}
          <div className="relative mt-4 mb-8 flex items-center justify-center">
            <div className="absolute inset-x-0 h-px bg-neutral-100"></div>
            <span className="relative bg-white px-3 text-2xs font-semibold text-neutral-400">
              {t.or}
            </span>
          </div>

          {/* Social login buttons */}
          <div className="space-y-2">
            {/* Google button */}
            <button 
              type="button"
              className="flex h-10 w-full items-center justify-center space-x-2.5 rounded-xl border border-neutral-200 bg-white px-4 text-sm font-semibold text-neutral-700 shadow-2xs transition hover:bg-neutral-50 active:scale-[0.99]"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>{t.googleLogin}</span>
            </button>

            {/* Facebook button */}
            <button 
              type="button"
              className="flex h-10 w-full items-center justify-center space-x-2.5 rounded-xl border border-neutral-200 bg-white px-4 text-sm font-semibold text-neutral-700 shadow-2xs transition hover:bg-neutral-50 active:scale-[0.99]"
            >
              <svg className="h-5 w-5 fill-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>{t.facebookLogin}</span>
            </button>
          </div>

          {/* Footer prompt with React Router Link */}
          <div className="mt-3 text-center text-xs font-semibold text-neutral-500">
            <span>{t.signUpPrompt} </span>
            <Link to="/register" className="text-primary-700 hover:underline">
              {t.signUpLink}
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
