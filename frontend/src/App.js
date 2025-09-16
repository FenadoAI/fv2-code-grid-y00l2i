import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8000';
const API = `${API_BASE}/api`;

const Home = () => {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Subtle background elements for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/20 to-purple-100/15 rounded-full liquid-glass-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-100/15 to-pink-100/10 rounded-full liquid-glass-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-gradient-to-br from-cyan-100/10 to-blue-100/8 rounded-full liquid-glass-float" style={{animationDelay: '1s'}}></div>
      </div>
      {/* Header */}
      <header className="container mx-auto px-6 py-8 relative z-10">
        <nav className="flex justify-between items-center liquid-glass-enhanced rounded-2xl px-8 py-4 shadow-lg glass-content">
          <a
            href="https://fenado.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3"
          >
            <img src="https://fenado.ai/fenado-logo.png" className="w-12 h-12 rounded-lg" alt="Fenado Logo" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Fenado AI
            </span>
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <Button className="liquid-glass-button text-gray-800 glass-content">
            Get Started
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center relative z-10">
        <Badge className="mb-6 liquid-glass-animated text-gray-800 glass-content">
          🚀 Now Available
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
          Transform Your Business with AI
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Unlock the power of artificial intelligence to streamline your workflow, boost productivity,
          and drive innovation across your entire organization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="liquid-glass-button text-gray-800 text-lg px-8 py-4 shadow-lg glass-content">
            Start Free Trial
          </Button>
          <Button size="lg" className="liquid-glass-button text-gray-700 text-lg px-8 py-4 glass-content">
            Watch Demo
          </Button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="AI Dashboard"
          className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl liquid-glass-edge"
        />
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to harness the power of AI in one comprehensive platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group liquid-glass-animated hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 liquid-glass rounded-lg mb-4 flex items-center justify-center shadow-lg glass-content">
                <span className="text-gray-700 text-2xl">🧠</span>
              </div>
              <CardTitle className="text-xl">Smart Analytics</CardTitle>
              <CardDescription>
                Advanced AI-powered analytics that provide deep insights into your data and business performance.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group liquid-glass-animated hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 liquid-glass rounded-lg mb-4 flex items-center justify-center shadow-lg glass-content">
                <span className="text-gray-700 text-2xl">⚡</span>
              </div>
              <CardTitle className="text-xl">Lightning Fast</CardTitle>
              <CardDescription>
                Process thousands of data points in seconds with our optimized AI algorithms and cloud infrastructure.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group liquid-glass-animated hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 liquid-glass rounded-lg mb-4 flex items-center justify-center shadow-lg glass-content">
                <span className="text-gray-700 text-2xl">🔒</span>
              </div>
              <CardTitle className="text-xl">Enterprise Security</CardTitle>
              <CardDescription>
                Bank-level security with end-to-end encryption, compliance certifications, and advanced access controls.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group liquid-glass-animated hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 liquid-glass rounded-lg mb-4 flex items-center justify-center shadow-lg glass-content">
                <span className="text-gray-700 text-2xl">🎯</span>
              </div>
              <CardTitle className="text-xl">Precision Targeting</CardTitle>
              <CardDescription>
                AI-driven targeting that learns from your data to deliver personalized experiences at scale.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group liquid-glass-animated hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 liquid-glass rounded-lg mb-4 flex items-center justify-center shadow-lg glass-content">
                <span className="text-gray-700 text-2xl">📈</span>
              </div>
              <CardTitle className="text-xl">Growth Optimization</CardTitle>
              <CardDescription>
                Continuous optimization algorithms that adapt and improve your business metrics over time.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group liquid-glass-animated hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 liquid-glass rounded-lg mb-4 flex items-center justify-center shadow-lg glass-content">
                <span className="text-gray-700 text-2xl">🌐</span>
              </div>
              <CardTitle className="text-xl">Global Scale</CardTitle>
              <CardDescription>
                Deploy worldwide with multi-region support, 99.9% uptime, and automatic scaling capabilities.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
        <div className="absolute inset-0 liquid-glass-dark"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-white/90">
            Join thousands of companies already using Fenado AI to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="liquid-glass-button text-white text-lg px-8 py-4 shadow-lg glass-content">
              Start Your Free Trial
            </Button>
            <Button size="lg" className="liquid-glass-button text-white text-lg px-8 py-4 glass-content">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-900/95 text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img src="https://fenado.ai/fenado-logo.png" className="w-8 h-8 rounded" alt="Fenado Logo" />
                <span className="text-xl font-bold">Fenado AI</span>
              </div>
              <p className="text-gray-400 mb-6">
                Empowering businesses worldwide with cutting-edge artificial intelligence solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fenado AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
