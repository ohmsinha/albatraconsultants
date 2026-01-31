import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogs';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm';
import { Calendar, Clock, User, ArrowLeft, Tag, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  // Find related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen bg-surface font-sans">
      <SEO 
        title={`${post.title} | Al Batra Insights`}
        description={post.excerpt}
      />

      {/* Progress Bar (Visual) */}
      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-200">
        <div className="h-full bg-primary w-1/3"></div> {/* Static representation for now */}
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24 bg-secondary overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link to="/blogs" className="inline-flex items-center text-slate-300 hover:text-white mb-6 text-sm font-medium transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
            </Link>
            
            <div className="flex items-center justify-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                    {post.category}
                </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">
                {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 text-sm">
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center mr-3 border border-slate-500">
                        <User className="w-5 h-5 text-slate-200" />
                    </div>
                    <div className="text-left">
                        <div className="text-white font-bold">{post.author}</div>
                        <div className="text-xs text-slate-400">{post.role}</div>
                    </div>
                </div>
                <div className="h-8 w-px bg-slate-700 hidden sm:block"></div>
                <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {post.date}
                </div>
                <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    {post.readTime}
                </div>
            </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-8">
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 prose prose-slate max-w-none prose-headings:text-secondary prose-a:text-primary hover:prose-a:text-primary-dark prose-img:rounded-xl">
                      {post.content}
                  </div>

                  {/* Share & Tags */}
                  <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-6">
                      <div className="flex items-center gap-2">
                          <Tag className="w-4 h-4 text-slate-400" />
                          <span className="text-sm font-bold text-slate-600">Tags:</span>
                          <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">{post.category}</span>
                          <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">ISO Certification</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <span className="text-sm font-bold text-slate-600 mr-2">Share:</span>
                          <button className="p-2 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-500 hover:text-blue-600 transition-colors">
                              <Linkedin className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-500 hover:text-blue-400 transition-colors">
                              <Twitter className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-500 hover:text-blue-800 transition-colors">
                              <Facebook className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors">
                              <Share2 className="w-4 h-4" />
                          </button>
                      </div>
                  </div>

                  {/* Related Articles */}
                  {relatedPosts.length > 0 && (
                      <div className="mt-16">
                          <h3 className="text-2xl font-bold text-secondary mb-6">Related Articles</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {relatedPosts.map(rel => (
                                  <Link key={rel.id} to={`/blog/${rel.id}`} className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all">
                                      <div className="h-40 overflow-hidden">
                                          <img src={rel.image} alt={rel.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                      </div>
                                      <div className="p-6">
                                          <div className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{rel.category}</div>
                                          <h4 className="font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-2">{rel.title}</h4>
                                      </div>
                                  </Link>
                              ))}
                          </div>
                      </div>
                  )}
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4 space-y-8">
                  {/* Sticky Container */}
                  <div className="sticky top-28 space-y-8">
                      
                      {/* CTA Card */}
                      <div className="bg-gradient-to-br from-secondary to-slate-900 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                          <h3 className="text-xl font-bold mb-3 relative z-10">Need help with {post.category}?</h3>
                          <p className="text-slate-300 text-sm mb-6 relative z-10">
                              Our consultants are ready to guide you through the certification process.
                          </p>
                          <Link 
                            to={post.serviceLink} 
                            className="block w-full py-3 px-4 bg-primary hover:bg-primary-dark text-white text-center font-bold rounded-lg transition-colors relative z-10 shadow-lg shadow-primary/25"
                          >
                              View Service Details
                          </Link>
                      </div>

                      {/* Lead Form */}
                      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-1">
                          <div className="bg-slate-50 p-4 rounded-t-xl border-b border-slate-100 text-center">
                              <h4 className="font-bold text-secondary">Book a Free Consultation</h4>
                          </div>
                          <LeadForm 
                              title="" 
                              subtitle="" 
                              className="shadow-none border-none"
                              buttonText="Request Call Back"
                          />
                      </div>

                  </div>
              </aside>

          </div>
      </div>
    </div>
  );
};

export default BlogPost;