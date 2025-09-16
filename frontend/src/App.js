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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
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
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Get Started
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100">
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
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-gray-300 hover:bg-gray-50">
            Watch Demo
          </Button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
          alt="AI Dashboard"
          className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl border border-gray-200"
        />
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to harness the power of AI in one comprehensive platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🧠</span>
              </div>
              <CardTitle className="text-xl">Smart Analytics</CardTitle>
              <CardDescription>
                Advanced AI-powered analytics that provide deep insights into your data and business performance.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <CardTitle className="text-xl">Lightning Fast</CardTitle>
              <CardDescription>
                Process thousands of data points in seconds with our optimized AI algorithms and cloud infrastructure.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <CardTitle className="text-xl">Enterprise Security</CardTitle>
              <CardDescription>
                Bank-level security with end-to-end encryption, compliance certifications, and advanced access controls.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <CardTitle className="text-xl">Precision Targeting</CardTitle>
              <CardDescription>
                AI-driven targeting that learns from your data to deliver personalized experiences at scale.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">📈</span>
              </div>
              <CardTitle className="text-xl">Growth Optimization</CardTitle>
              <CardDescription>
                Continuous optimization algorithms that adapt and improve your business metrics over time.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🌐</span>
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Join thousands of companies already using Fenado AI to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
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
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
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
