'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<'deployments' | 'overview' | 'projects'>('deployments')

  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Radial Glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[130px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* ===== LEFT COLUMN: HEADLINE & FEATURES ===== */}
        <div className="lg:col-span-6 xl:col-span-5 flex flex-col items-start relative">
          
          {/* Top Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-xs font-semibold text-zinc-200 mb-6 shadow-sm backdrop-blur-md"
          >
            <span className="w-4 h-4 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-[10px]">✦</span>
            <span className="tracking-wider uppercase text-[11px] font-bold text-zinc-200">PREMIUM NEXT.JS TEMPLATES</span>
          </motion.div>

          {/* Main Headline with Accent Annotation */}
          <div className="relative w-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6"
            >
              NextJS dashboards <br />
              and Landing Page <br />
              Templates
            </motion.h1>

            {/* Handwritten Accent "Build Faster ➔" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden sm:flex flex-col items-center absolute -top-4 right-0 lg:-right-4 z-20 pointer-events-none"
            >
              <span 
                className="text-indigo-300 font-serif italic text-xl tracking-wide -rotate-6 font-bold"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Build Faster
              </span>
              <svg className="w-12 h-10 text-indigo-400 mt-0.5" viewBox="0 0 50 40" fill="none">
                <path d="M 8 5 Q 35 12 38 32" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" fill="none" />
                <path d="M 30 25 L 38 32 L 40 22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 max-w-lg"
          >
            Premium Next.js and Tailwind CSS templates. Explore landing pages, dashboards, and full-stack applications, with frontend-only and complete packages available.
          </motion.p>

          {/* 3 Horizontal Feature Cards Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-3 gap-3 w-full"
          >
            {/* Card 1: Full Stack Ready */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-3 sm:p-3.5 flex flex-col sm:flex-row items-center sm:items-start gap-2.5 backdrop-blur-sm hover:border-zinc-700 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white leading-tight">Full Stack</h4>
                <p className="text-[10px] text-zinc-400 mt-0.5">Ready</p>
              </div>
            </div>

            {/* Card 2: RTL Ready */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-3 sm:p-3.5 flex flex-col sm:flex-row items-center sm:items-start gap-2.5 backdrop-blur-sm hover:border-zinc-700 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white leading-tight">RTL Ready</h4>
                <p className="text-[10px] text-zinc-400 mt-0.5">Dual i18n</p>
              </div>
            </div>

            {/* Card 3: Production Ready */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-3 sm:p-3.5 flex flex-col sm:flex-row items-center sm:items-start gap-2.5 backdrop-blur-sm hover:border-zinc-700 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white leading-tight">Production</h4>
                <p className="text-[10px] text-zinc-400 mt-0.5">Ready</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== RIGHT COLUMN: INTERACTIVE DASHBOARD MOCKUP ===== */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-6 xl:col-span-7 relative"
        >
          {/* macOS Glass Window Frame */}
          <div className="relative rounded-2xl border border-zinc-800 bg-[#0d0d12]/95 backdrop-blur-2xl shadow-2xl overflow-hidden text-zinc-300">
            
            {/* Top Toolbar Address Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#111118] border-b border-zinc-800/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/90" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/90" />
                <div className="w-3 h-3 rounded-full bg-green-500/90" />
                
                {/* Back/Forward Nav Arrows */}
                <div className="hidden sm:flex items-center gap-1.5 ml-3 text-zinc-500">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>

              {/* URL Address Bar Input */}
              <div className="flex-1 max-w-sm mx-4 bg-[#181820] border border-zinc-800 rounded-md px-3 py-1 text-[11px] text-zinc-400 font-mono flex items-center gap-2 overflow-hidden">
                <span className="text-zinc-600">https://</span>
                <span className="text-zinc-200 truncate">dashboard.agaton.dev/deployments</span>
              </div>

              {/* Window Right Action */}
              <div className="w-4 h-4 text-zinc-500">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
            </div>

            {/* Dashboard Content Split Layout */}
            <div className="grid grid-cols-12 min-h-[420px] text-xs">
              
              {/* Left Sidebar */}
              <div className="col-span-4 border-r border-zinc-800/80 p-3.5 bg-[#0f0f15] flex flex-col justify-between">
                <div>
                  {/* Sidebar Brand Header */}
                  <div className="flex items-center gap-2.5 mb-6 px-1">
                    <div className="w-7 h-7 rounded-lg bg-zinc-100 text-zinc-950 font-bold flex items-center justify-center text-sm shadow-sm">
                      S
                    </div>
                    <span className="font-bold text-white text-sm">StartUp</span>
                  </div>

                  {/* Section 1: MAIN */}
                  <div className="mb-5">
                    <p className="text-[10px] font-semibold text-zinc-500 tracking-wider uppercase mb-2 px-1">MAIN</p>
                    <div className="space-y-1">
                      <button
                        onClick={() => setActiveTab('overview')}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-colors ${
                          activeTab === 'overview' ? 'bg-zinc-800 text-white font-medium' : 'text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                          <span>Overview</span>
                        </div>
                      </button>

                      <button
                        onClick={() => setActiveTab('projects')}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-colors ${
                          activeTab === 'projects' ? 'bg-zinc-800 text-white font-medium' : 'text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                          <span>Projects</span>
                        </div>
                        <span className="text-[10px] text-zinc-500 font-mono">12</span>
                      </button>

                      <button
                        onClick={() => setActiveTab('deployments')}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-colors ${
                          activeTab === 'deployments' ? 'bg-zinc-800 text-white font-semibold border border-zinc-700/60 shadow-sm' : 'text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          <span className="text-white">Deployments</span>
                        </div>
                        <span className="text-[10px] bg-zinc-700 text-zinc-200 px-1.5 py-0.5 rounded font-mono">3</span>
                      </button>
                    </div>
                  </div>

                  {/* Section 2: MANAGEMENT */}
                  <div>
                    <p className="text-[10px] font-semibold text-zinc-500 tracking-wider uppercase mb-2 px-1">MANAGEMENT</p>
                    <div className="space-y-1 text-zinc-400">
                      <div className="flex items-center justify-between px-2.5 py-1.5 hover:text-zinc-200 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                          <span>Notifications</span>
                        </div>
                        <span className="text-[10px] text-zinc-500 font-mono">9</span>
                      </div>
                      <div className="flex items-center gap-2 px-2.5 py-1.5 hover:text-zinc-200 cursor-pointer">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        <span>Team</span>
                      </div>
                      <div className="flex items-center gap-2 px-2.5 py-1.5 hover:text-zinc-200 cursor-pointer">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>
                        <span>Settings</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content Pane */}
              <div className="col-span-8 p-4 bg-[#0d0d12] flex flex-col justify-between relative">
                
                <div>
                  {/* Content Pane Header */}
                  <div className="flex items-center justify-between mb-4 border-b border-zinc-800/80 pb-3">
                    <h3 className="font-bold text-sm text-white">Dashboard Overview</h3>
                    <div className="w-5 h-5 text-zinc-500">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                  </div>

                  {/* 3 Stat Cards Row */}
                  <div className="grid grid-cols-3 gap-2.5 mb-5">
                    {/* Stat Card 1 */}
                    <div className="bg-[#14141e] border border-zinc-800 rounded-xl p-2.5">
                      <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1">
                        <span>Total Deployments</span>
                        <span>🚀</span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-base font-extrabold text-white">247</span>
                        <span className="text-[9px] font-semibold text-emerald-400">↗ +12%</span>
                      </div>
                    </div>

                    {/* Stat Card 2 */}
                    <div className="bg-[#14141e] border border-zinc-800 rounded-xl p-2.5">
                      <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1">
                        <span>Success Rate</span>
                        <span>↗</span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-base font-extrabold text-white">98.2%</span>
                        <span className="text-[9px] font-semibold text-emerald-400">↗ +2.1%</span>
                      </div>
                    </div>

                    {/* Stat Card 3 */}
                    <div className="bg-[#14141e] border border-zinc-800 rounded-xl p-2.5">
                      <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1">
                        <span>Failed Deployments</span>
                      </div>
                      <div className="flex items-baseline justify-between">
                        <span className="text-base font-extrabold text-white">3</span>
                        <span className="text-[9px] font-semibold text-rose-400">↘ -50%</span>
                      </div>
                    </div>
                  </div>

                  {/* Projects Table */}
                  <div className="bg-[#12121a] border border-zinc-800/80 rounded-xl overflow-hidden">
                    <div className="grid grid-cols-12 px-3 py-2 bg-zinc-900/60 text-[9px] font-semibold text-zinc-500 uppercase border-b border-zinc-800">
                      <div className="col-span-6">PROJECT</div>
                      <div className="col-span-3">STATUS</div>
                      <div className="col-span-3 text-right">TIME</div>
                    </div>

                    <div className="divide-y divide-zinc-800/60 text-[11px]">
                      {/* Row 1 */}
                      <div className="grid grid-cols-12 px-3 py-2 items-center hover:bg-zinc-800/40 transition-colors">
                        <div className="col-span-6 flex items-center gap-2">
                          <div className="w-5 h-5 rounded bg-zinc-800 text-zinc-300 font-bold flex items-center justify-center text-[10px]">F</div>
                          <div>
                            <p className="font-semibold text-zinc-100 text-[11px] leading-tight">Frontend App</p>
                            <p className="text-[9px] text-zinc-500 font-mono">feat/ui-components</p>
                          </div>
                        </div>
                        <div className="col-span-3">
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-medium border border-emerald-500/20">
                            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" /> Live
                          </span>
                        </div>
                        <div className="col-span-3 text-right text-zinc-500 text-[10px]">2m ago</div>
                      </div>

                      {/* Row 2 */}
                      <div className="grid grid-cols-12 px-3 py-2 items-center hover:bg-zinc-800/40 transition-colors">
                        <div className="col-span-6 flex items-center gap-2">
                          <div className="w-5 h-5 rounded bg-zinc-800 text-zinc-300 font-bold flex items-center justify-center text-[10px]">A</div>
                          <div>
                            <p className="font-semibold text-zinc-100 text-[11px] leading-tight">API Server</p>
                            <p className="text-[9px] text-zinc-500 font-mono">fix/auth-timeout</p>
                          </div>
                        </div>
                        <div className="col-span-3">
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-medium border border-emerald-500/20">
                            <span className="w-1 h-1 rounded-full bg-emerald-400" /> Live
                          </span>
                        </div>
                        <div className="col-span-3 text-right text-zinc-500 text-[10px]">5m ago</div>
                      </div>

                      {/* Row 3 */}
                      <div className="grid grid-cols-12 px-3 py-2 items-center hover:bg-zinc-800/40 transition-colors">
                        <div className="col-span-6 flex items-center gap-2">
                          <div className="w-5 h-5 rounded bg-zinc-800 text-zinc-300 font-bold flex items-center justify-center text-[10px]">D</div>
                          <div>
                            <p className="font-semibold text-zinc-100 text-[11px] leading-tight">Database Service</p>
                            <p className="text-[9px] text-zinc-500 font-mono">main</p>
                          </div>
                        </div>
                        <div className="col-span-3">
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] font-medium border border-emerald-500/20">
                            <span className="w-1 h-1 rounded-full bg-emerald-400" /> Live
                          </span>
                        </div>
                        <div className="col-span-3 text-right text-zinc-500 text-[10px]">12m ago</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Bottom Right Mascot Widget "Need Help? 🎧" */}
                <div className="absolute bottom-3 right-3 z-30">
                  <div className="bg-[#1a1a24]/90 border border-zinc-700/60 rounded-full px-3 py-1.5 flex items-center gap-2 shadow-xl backdrop-blur-md hover:scale-105 transition-transform cursor-pointer">
                    <div className="relative w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center overflow-hidden text-[10px] text-white font-bold">
                      🤖
                      <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border border-zinc-900" />
                    </div>
                    <span className="text-[11px] font-semibold text-white">Need Help?</span>
                    <span className="text-[11px]">🎧</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
