import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search, Tag, User } from 'lucide-react';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';
import { blogPosts } from '../data/blogs';

const Blogs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Industry Insights & ISO Resources | Al Batra Blog UAE"
        description="Expert articles on ISO 9001, HACCP, Safety, and Business Excellence. Stay updated with the latest regulatory changes and management best practices in the UAE."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary">
        <div className="absolute inset-0 z-0 overflow-hidden">
             <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-medium text-slate-200 uppercase tracking-wider">Resource Hub</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Insights & <span className="text-primary">Perspectives</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Expert analysis, regulatory updates, and practical guides to help you navigate the world of ISO certification and management excellence.
            </p>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  {/* Category Pills */}
                  <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto custom-scrollbar">
                      {categories.slice(0, 5).map(cat => (
                          <button
                              key={cat}
                              onClick={() => setSelectedCategory(cat)}
                              className={`px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 border ${
                                  selectedCategory === cat 
                                  ? 'bg-gradient-to-r from-secondary to-slate-800 text-white border-transparent shadow-md transform scale-105' 
                                  : 'bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary'
                              }`}
                          >
                              {cat}
                          </button>
                      ))}
                      {categories.length > 5 && (
                          <select 
                            className="px-5 py-2 rounded-full text-xs font-bold bg-white text-slate-600 border border-slate-200 hover:border-primary focus:outline-none cursor-pointer appearance-none shadow-sm"
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            value={categories.includes(selectedCategory) && !categories.slice(0, 5).includes(selectedCategory) ? selectedCategory : "More"}
                          >
                              <option value="More" disabled>More...</option>
                              {categories.slice(5).map(cat => (
                                  <option key={cat} value={cat}>{cat}</option>
                              ))}
                          </select>
                      )}
                  </div>

                  {/* Search Input */}
                  <div className="relative w-full md:w-64">
                      <input 
                          type="text" 
                          placeholder="Search articles..." 
                          className="w-full pl-10 pr-4 py-2.5 rounded-full border border-slate-300 bg-slate-50 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none text-sm transition-all"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  </div>
              </div>
          </div>
      </div>

      {/* Main Content */}
      <section className="py-16 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Blog Grid */}
                  <div className="lg:col-span-2">
                      {filteredPosts.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              {filteredPosts.map((post) => (
                                  <article key={post.id} className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group h-full">
                                      <Link to={`/blog/${post.id}`} className="relative h-48 overflow-hidden block">
                                          <img 
                                              src={post.image} 
                                              alt={post.title} 
                                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                          />
                                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary flex items-center shadow-lg">
                                              <Tag className="w-3 h-3 mr-1 text-primary" /> {post.category}
                                          </div>
                                      </Link>
                                      
                                      <div className="flex-1 p-6 flex flex-col">
                                          <div className="flex items-center gap-4 text-xs text-slate-400 mb-3 font-medium">
                                              <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                                              <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                                          </div>
                                          
                                          <h2 className="text-xl font-bold text-secondary mb-3 leading-snug group-hover:text-primary transition-colors">
                                              <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                          </h2>
                                          
                                          <p className="text-sm text-slate-500 line-clamp-3 mb-6 flex-grow leading-relaxed">
                                              {post.excerpt}
                                          </p>
                                          
                                          <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                                              <div className="flex items-center text-xs font-medium text-slate-500">
                                                  <User className="w-3 h-3 mr-1" /> {post.author}
                                              </div>
                                              <Link 
                                                to={`/blog/${post.id}`} 
                                                className="inline-flex items-center px-4 py-2 bg-slate-50 text-primary text-xs font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                                              >
                                                  Read Article <ArrowRight className="w-3 h-3 ml-1" />
                                              </Link>
                                          </div>
                                      </div>
                                  </article>
                              ))}
                          </div>
                      ) : (
                          <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-slate-200">
                              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-slate-300" />
                              </div>
                              <h3 className="text-lg font-bold text-slate-400">No articles found</h3>
                              <p className="text-sm text-slate-400 mt-1">Try adjusting your search terms or category filter.</p>
                              <button onClick={() => {setSearchTerm(''); setSelectedCategory('All')}} className="mt-4 text-primary font-bold hover:underline">Clear Filters</button>
                          </div>
                      )}
                  </div>

                  {/* Sidebar */}
                  <aside className="space-y-8">
                      {/* Featured Lead Form */}
                      <div className="sticky top-40">
                          <div className="bg-secondary rounded-2xl p-1 shadow-xl overflow-hidden">
                              <div className="bg-secondary p-6 text-center relative">
                                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-full blur-xl -mr-5 -mt-5"></div>
                                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">Need Expert Advice?</h3>
                                  <p className="text-sm text-slate-300 relative z-10">Book a free 15-min discovery call with our lead consultants.</p>
                              </div>
                              <div className="bg-white rounded-xl">
                                  <LeadForm 
                                      title="" 
                                      subtitle="" 
                                      buttonText="Schedule Call"
                                      className="shadow-none border-none"
                                  />
                              </div>
                          </div>

                          <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                              <h4 className="font-bold text-secondary mb-4 text-sm uppercase tracking-wider border-b border-slate-100 pb-2">Popular Topics</h4>
                              <div className="flex flex-wrap gap-2">
                                  {['ISO 9001', 'HACCP', 'Risk Assessment', 'Internal Audit', 'Strategic Planning', 'Compliance', 'Sustainability'].map(tag => (
                                      <span key={tag} className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-medium rounded-lg border border-slate-200 cursor-default hover:border-primary hover:text-primary hover:bg-primary/5 transition-colors">
                                          #{tag}
                                      </span>
                                  ))}
                              </div>
                          </div>
                      </div>
                  </aside>
              </div>

          </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-secondary mb-4">Stay Ahead of the Curve</h2>
              <p className="text-slate-500 mb-8">
                  Join 2,000+ professionals receiving our monthly digest on regulatory changes and management best practices.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="flex-1 px-6 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-shadow"
                  />
                  <button className="px-8 py-3 bg-gradient-to-r from-secondary to-slate-800 hover:from-slate-800 hover:to-secondary text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl active:scale-95">
                      Subscribe
                  </button>
              </form>
              <p className="text-xs text-slate-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
      </section>

    </div>
  );
};

export default Blogs;