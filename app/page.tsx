'use client';

import React, { useState } from 'react';
import { Simulado, SimuladoResultData, ExamCategory } from '@/data/types';
import { allSimulados, getSimuladoById } from '@/data/simuladosData';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CategoryGrid } from '@/components/CategoryGrid';
import { FeaturedSimulados } from '@/components/FeaturedSimulados';
import { FeaturesSection } from '@/components/FeaturesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';
import { SimuladoRunner } from '@/components/SimuladoRunner';
import { SimuladoResult } from '@/components/SimuladoResult';

export default function HomePage() {
  const [currentView, setCurrentView] = useState<'home' | 'runner' | 'result'>('home');
  const [activeSimulado, setActiveSimulado] = useState<Simulado | null>(null);
  const [latestResult, setLatestResult] = useState<SimuladoResultData | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<ExamCategory | 'all'>('all');

  // Trigger exam execution
  const handleStartExam = (simulado: Simulado) => {
    setActiveSimulado(simulado);
    setCurrentView('runner');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Quick start defaults to ENEM 1º Dia or first available
  const handleQuickStart = () => {
    const defaultExam = allSimulados[0];
    if (defaultExam) {
      handleStartExam(defaultExam);
    }
  };

  // Exam completion
  const handleExamFinish = (result: SimuladoResultData) => {
    setLatestResult(result);
    setCurrentView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Retry same exam
  const handleRetryExam = () => {
    if (activeSimulado) {
      setCurrentView('runner');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView('home');
    }
  };

  // Return to home catalog
  const handleBackToHome = () => {
    setCurrentView('home');
    setActiveSimulado(null);
    setLatestResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Category navigation scroll
  const handleNavigateSection = (sectionId: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleOpenExamById = (examId: string) => {
    const exam = getSimuladoById(examId);
    if (exam) {
      handleStartExam(exam);
    } else {
      handleNavigateSection('simulados');
    }
  };

  // View: Runner (Active Exam)
  if (currentView === 'runner' && activeSimulado) {
    return (
      <SimuladoRunner
        simulado={activeSimulado}
        onFinish={handleExamFinish}
        onExit={handleBackToHome}
      />
    );
  }

  // View: Results Screen (Pedagogical Diagnostic & Gabarito)
  if (currentView === 'result' && activeSimulado && latestResult) {
    return (
      <SimuladoResult
        simulado={activeSimulado}
        result={latestResult}
        onRetry={handleRetryExam}
        onBackToHome={handleBackToHome}
      />
    );
  }

  // View: Main Public Landing & Exam Catalog
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff]">
      {/* Fixed Header */}
      <Header
        onStartQuickSimulado={handleQuickStart}
        onNavigateSection={handleNavigateSection}
      />

      <main className="flex-1 w-full pt-20">
        {/* 1. Hero Section */}
        <Hero
          onStartSimulado={handleQuickStart}
          onExploreCategories={() => handleNavigateSection('categorias')}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* 2. Educational Categories */}
        <CategoryGrid
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            handleNavigateSection('simulados');
          }}
          onOpenExam={handleOpenExamById}
        />

        {/* 3. Featured Simulados Catalog */}
        <FeaturedSimulados
          onStartExam={handleStartExam}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
        />

        {/* 4. Differentials / Technology */}
        <FeaturesSection />

        {/* 5. Testimonials of Approved Students */}
        <TestimonialsSection />

        {/* 6. Call to Action */}
        <CallToAction
          onStartSimulado={handleQuickStart}
          onExplore={() => handleNavigateSection('simulados')}
        />
      </main>

      {/* Global Footer */}
      <Footer
        onSelectCategoryFilter={(catSlug) => {
          setSelectedCategory(catSlug as ExamCategory);
          handleNavigateSection('simulados');
        }}
      />
    </div>
  );
}
